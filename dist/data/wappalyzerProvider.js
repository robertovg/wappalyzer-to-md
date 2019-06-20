"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../constants/errors");

const Wappalyzer = require('wappalyzer');
/**
 * Object which warps the functionality to connect to wappalyzer
 */


const wappalyzerProvider = {
  async call(url) {
    const wappalyzer = new Wappalyzer(url);
    const json = await wappalyzer.analyze().catch(error => {
      console.error(error);
      throw new Error(_errors.errorWappalyzerAnalysis.key);
    });

    if (Object.values(json.urls).some(e => e.status !== 200)) {
      throw new Error(_errors.errorAnalysisNotResolved.key);
    }

    return json;
  }

};
var _default = wappalyzerProvider;
exports.default = _default;