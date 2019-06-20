"use strict";

var _paramValidation = _interopRequireDefault(require("./paramValidation"));

var _errors = require("../constants/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('paramValidation', () => {
  it('should rise exception when no URL param', () => {
    expect(() => {
      (0, _paramValidation.default)();
    }).toThrow(_errors.errorNoURLParam.key);
  });
  it('should rise no valid url exception when no URL param', () => {
    expect(() => {
      (0, _paramValidation.default)('invalidURL');
    }).toThrow(_errors.errorNoValidURLParam.key);
  });
});