import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts; // повертаємо масив контактів
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error.message);
    return []; // у разі помилки повертаємо порожній масив
  }
};

console.log(await getAllContacts());
