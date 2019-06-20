"use strict";

var _clipboardy = _interopRequireDefault(require("clipboardy"));

var _clipboardWriter = _interopRequireDefault(require("./clipboardWriter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('clipboardy');
describe('clipboardWriter', () => {
  it('should call write in async way', () => {
    (0, _clipboardWriter.default)('whatever');
    expect(_clipboardy.default.write).toBeCalledWith('whatever');
  });
});