import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, null, 2); // форматовано з відступами
    // Записуємо дані у файл
    await fs.writeFile(PATH_DB, jsonData, { encoding: 'utf-8' });
    console.log('Contacts successfully written to file:', PATH_DB);
  } catch (error) {
    console.error('Error writing contacts to file:', error);
  }
};
