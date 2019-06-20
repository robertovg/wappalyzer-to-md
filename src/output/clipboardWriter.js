import clipboardy from 'clipboardy';

export default async function clipboardWriter(markdown = '') {
  return await clipboardy.write(markdown);
}
