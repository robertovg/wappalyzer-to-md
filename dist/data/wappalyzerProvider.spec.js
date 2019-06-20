"use strict";

var _wappalyzerProvider = _interopRequireDefault(require("./wappalyzerProvider"));

var _errors = require("../constants/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('wappalyzerProvider', () => {
  it('should expect 200 status from the call with the URL', async () => {
    const url = 'https://ok.mock/';
    const wappalyzerAnswer = await _wappalyzerProvider.default.call(url);
    expect(wappalyzerAnswer.urls[url].status).toBe(200);
  });
  it('should expect 400 status from the call throw one exception', async () => {
    const url = 'https://error.mock/';
    await expect(_wappalyzerProvider.default.call(url)).rejects.toThrow(_errors.errorAnalysisNotResolved.key);
  });
});