import { errorAnalysisNotResolved, errorWappalyzerAnalysis } from '../constants/errors';
const Wappalyzer = require('wappalyzer');
/**
 * Object which warps the functionality to connect to wappalyzer
 */
const wappalyzerProvider = {
  async call(url) {
    const wappalyzer = new Wappalyzer(url);
    const json = await wappalyzer.analyze().catch(error => {
      console.error(error);
      throw new Error(errorWappalyzerAnalysis.key);
    });
    if (Object.values(json.urls).some(e => e.status !== 200)) {
      throw new Error(errorAnalysisNotResolved.key);
    }
    return json;
  },
};

export default wappalyzerProvider;
