"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = paramValidation;

var _errors = require("../constants/errors");

/**
 * Function to validate the params to the utility
 */
function paramValidation(url) {
  if (!url) {
    throw new Error(_errors.errorNoURLParam.key);
  }

  if (!url.match(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)) {
    throw new Error(_errors.errorNoValidURLParam.key);
  }
}