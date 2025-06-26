import { createFakeContact } from '..//utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts(); // Read existing contacts
    const newContact = createFakeContact(); // Generate an array of fake contact
    contacts.push(newContact); // Add the new contact to the existing contacts
    await writeContacts(contacts); // Write the updated contacts back to the file
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};
addOneContact();
