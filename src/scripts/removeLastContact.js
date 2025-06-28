import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      const lastContact = contacts[contacts.length - 1];

      const upDatedContact = contacts.slice(0, contacts.length - 1);
      console.log(
        `Видалено останній контакт: ${lastContact.name || 'без імені'} (ID: ${
          lastContact.id || 'невідомий'
        })`,
      );
      await writeContacts(upDatedContact);
    } else console.log('No contacts found to remove.');
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту:', error.message);
  }
};

removeLastContact();
