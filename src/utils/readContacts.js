import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
    console.log('Розпарсені дані:', contacts);
    return contacts;
  } catch (error) {
    console.error('Помилка при читанні файлу:', error);
    return [];
  }
};
