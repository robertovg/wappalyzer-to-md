import wappalyzerProvider from './wappalyzerProvider';
import { errorAnalysisNotResolved } from '../constants/errors';
describe('wappalyzerProvider', () => {
  it('should expect 200 status from the call with the URL', async () => {
    const url = 'https://ok.mock/';
    const wappalyzerAnswer = await wappalyzerProvider.call(url);
    expect(wappalyzerAnswer.urls[url].status).toBe(200);
  });

  it('should expect 400 status from the call throw one exception', async () => {
    const url = 'https://error.mock/';

    await expect(wappalyzerProvider.call(url)).rejects.toThrow(errorAnalysisNotResolved.key);
  });
});
