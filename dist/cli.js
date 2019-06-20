#! /usr/bin/env node
"use strict";

var _paramValidation = _interopRequireDefault(require("./validation/paramValidation"));

var _wappalyzerProvider = _interopRequireDefault(require("./data/wappalyzerProvider"));

var _wappalyzerJsonToMarkdown = _interopRequireDefault(require("./logic/wappalyzerJsonToMarkdown"));

var _clipboardWriter = _interopRequireDefault(require("./output/clipboardWriter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('-- Starting Execution --');
const [,, url] = process.argv;

(async () => {
  try {
    // 1.- We need to validate params
    (0, _paramValidation.default)(url); // 2.- Make the call to the sever side to check

    const json = await _wappalyzerProvider.default.call(url); // 3.- Transform it to markdown

    const markdown = (0, _wappalyzerJsonToMarkdown.default)(json); // 4.- Copy it to the clipboard

    await (0, _clipboardWriter.default)(markdown);
    console.log(' -- 📋 Markdown Copied 📋 -- ');
  } catch (e) {
    console.error(' --💥 Something when wrong 💥-- ');
    console.error(e);
  } finally {
    process.exit(0);
  }
})();