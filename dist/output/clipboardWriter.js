"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clipboardWriter;

var _clipboardy = _interopRequireDefault(require("clipboardy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function clipboardWriter(markdown = '') {
  return await _clipboardy.default.write(markdown);
}