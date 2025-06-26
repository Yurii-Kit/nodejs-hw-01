import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const parsed = JSON.parse(data);
    console.log('Розпарсені дані:', parsed);
    return parsed;
  } catch (error) {
    console.error('Помилка при читанні файлу:', error);
    return [];
  }
};
