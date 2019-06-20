import clipboardy from 'clipboardy';
import clipboardWriter from './clipboardWriter';

jest.mock('clipboardy');

describe('clipboardWriter', () => {
  it('should call write in async way', () => {
    clipboardWriter('whatever');
    expect(clipboardy.write).toBeCalledWith('whatever');
  });
});
