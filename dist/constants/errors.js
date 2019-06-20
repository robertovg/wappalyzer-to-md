"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorWappalyzerJSOStructure = exports.errorWappalyzerAnalysis = exports.errorAnalysisNotResolved = exports.errorNoValidURLParam = exports.errorNoURLParam = void 0;
const errorNoURLParam = {
  key: 'ERROR_NO_URL_PARAM',
  msg: 'no url param,\n please call wappalyzer-to-md with a valid URL. \n e.g. `npx wappalyzer-to-md https://google.com`'
};
exports.errorNoURLParam = errorNoURLParam;
const errorNoValidURLParam = {
  key: 'ERROR_NO_VALID_URL_PARAM',
  msg: 'no valid url param,\n please call wappalyzer-to-md with a valid URL. \n e.g. `npx wappalyzer-to-md https://google.com`'
};
exports.errorNoValidURLParam = errorNoValidURLParam;
const errorAnalysisNotResolved = {
  key: 'ERROR_ANALYSIS_NOT_RESOLVED',
  msg: 'server not responding,\n please confirm you can visit the url'
};
exports.errorAnalysisNotResolved = errorAnalysisNotResolved;
const errorWappalyzerAnalysis = {
  key: 'ERROR_WAPPALYZER_ANALYSIS',
  msg: 'wappalyzer analysis failed,\n please confirm https://www.wappalyzer.com is online.'
};
exports.errorWappalyzerAnalysis = errorWappalyzerAnalysis;
const errorWappalyzerJSOStructure = {
  key: 'ERROR_WAPPALYZER_JSO_STRUCTURE',
  msg: 'wappalyzer structure changed, not able to parse it.'
};
exports.errorWappalyzerJSOStructure = errorWappalyzerJSOStructure;