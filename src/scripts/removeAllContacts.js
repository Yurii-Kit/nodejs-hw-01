import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('No contacts found to remove.');
      return;
    }
    await writeContacts([]);
  } catch (error) {
    error.message === 'No contacts found.';
  }
};

removeAllContacts();
