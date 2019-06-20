#! /usr/bin/env node
import paramValidation from './validation/paramValidation';
import wappalyzerProvider from './data/wappalyzerProvider';
import wappalyzerJsonToMarkdown from './logic/wappalyzerJsonToMarkdown';
import clipboardWriter from './output/clipboardWriter';

console.log('-- Starting Execution --');
const [, , url] = process.argv;

(async () => {
  try {
    // 1.- We need to validate params
    paramValidation(url);
    // 2.- Make the call to the sever side to check
    const json = await wappalyzerProvider.call(url);
    // 3.- Transform it to markdown
    const markdown = wappalyzerJsonToMarkdown(json);
    // 4.- Copy it to the clipboard
    await clipboardWriter(markdown);

    console.log(' -- 📋 Markdown Copied 📋 -- ');
  } catch (e) {
    console.error(' --💥 Something when wrong 💥-- ');
    console.error(e);
  } finally {
    process.exit(0);
  }
})();
