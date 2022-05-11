import fs from 'node:fs/promises';

export const deleteFile = async (filename: string) => {
  try {
    await fs.stat(filename);
  } catch {
    console.error('NO FILE');
  } finally {
    await fs.unlink(filename);
  }
};
