import paramValidation from './paramValidation';
import { errorNoURLParam, errorNoValidURLParam } from '../constants/errors';

describe('paramValidation', () => {
  it('should rise exception when no URL param', () => {
    expect(() => {
      paramValidation();
    }).toThrow(errorNoURLParam.key);
  });

  it('should rise no valid url exception when no URL param', () => {
    expect(() => {
      paramValidation('invalidURL');
    }).toThrow(errorNoValidURLParam.key);
  });
});
