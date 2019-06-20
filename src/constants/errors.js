export const errorNoURLParam = {
  key: 'ERROR_NO_URL_PARAM',
  msg:
    'no url param,\n please call wappalyzer-to-md with a valid URL. \n e.g. `npx wappalyzer-to-md https://google.com`',
};
export const errorNoValidURLParam = {
  key: 'ERROR_NO_VALID_URL_PARAM',
  msg:
    'no valid url param,\n please call wappalyzer-to-md with a valid URL. \n e.g. `npx wappalyzer-to-md https://google.com`',
};

export const errorAnalysisNotResolved = {
  key: 'ERROR_ANALYSIS_NOT_RESOLVED',
  msg: 'server not responding,\n please confirm you can visit the url',
};
export const errorWappalyzerAnalysis = {
  key: 'ERROR_WAPPALYZER_ANALYSIS',
  msg: 'wappalyzer analysis failed,\n please confirm https://www.wappalyzer.com is online.',
};

export const errorWappalyzerJSOStructure = {
  key: 'ERROR_WAPPALYZER_JSO_STRUCTURE',
  msg: 'wappalyzer structure changed, not able to parse it.',
};
