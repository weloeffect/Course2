import fs from 'fs';
import path from 'path';

/**
 * File handling functionalities for reading and writing data.
 */

const readData = <T>(fileName: string): T => {
  const filePath = path.join(__dirname, '../data', fileName);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data) as T;
};

const writeData = <T>(fileName: string, data: T): void => {
  const filePath = path.join(__dirname, '../data', fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

export { readData, writeData };
