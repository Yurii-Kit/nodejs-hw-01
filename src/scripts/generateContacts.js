import { createFakeContact } from '..//utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts(); // Read existing contacts
    const newContacts = Array.from({ length: number }, () =>
      // Generate an array of fake contacts
      createFakeContact(),
    );
    // const newContacts = [];
    // for (let i = 0; i < number; i++) {
    //   newContacts.push(createFakeContact());
    // }

    const updatedContacts = [...contacts, ...newContacts]; // Combine existing contacts with new ones
    await writeContacts(updatedContacts); // Write the updated contacts back to the file
  } catch (error) {
    console.error('Error generating contacts', error.message);
  }
};

generateContacts(5);
