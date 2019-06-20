import wappalyzerJsonToMarkdown from './wappalyzerJsonToMarkdown';
import { errorWappalyzerJSOStructure } from '../constants/errors';

describe('textGenerator', () => {
  it('should return empty string when using empty object', () => {
    expect(wappalyzerJsonToMarkdown({})).toBe('');
  });

  it('should rise exception if no valid json was send', () => {
    expect(() => {
      wappalyzerJsonToMarkdown({ anotherStructure: false });
    }).toThrow(errorWappalyzerJSOStructure.key);
  });
  it('should return a correct markdown if valid json send (real world response)', () => {
    const url = 'fakeURL.com';
    const wappalyzerJson = {
      urls: {
        [url]: {
          status: 200,
        },
      },
      applications: [
        {
          name: 'Apache',
          confidence: '100',
          version: null,
          icon: 'Apache.svg',
          website: 'http://apache.org',
          categories: [
            {
              '22': 'Web Servers',
            },
          ],
        },
        {
          name: 'CodeIgniter',
          confidence: '100',
          version: null,
          icon: 'CodeIgniter.png',
          website: 'http://codeigniter.com',
          categories: [
            {
              '18': 'Web Frameworks',
            },
          ],
        },
        {
          name: 'ExpressionEngine',
          confidence: '100',
          version: null,
          icon: 'ExpressionEngine.png',
          website: 'http://expressionengine.com',
          categories: [
            {
              '1': 'CMS',
            },
          ],
        },
        {
          name: 'MailChimp',
          confidence: '100',
          version: null,
          icon: 'mailchimp.svg',
          website: 'http://mailchimp.com',
          categories: [
            {
              '32': 'Marketing Automation',
            },
          ],
        },
        {
          name: 'PHP',
          confidence: '100',
          version: '5.6.40',
          icon: 'PHP.svg',
          website: 'http://php.net',
          categories: [
            {
              '27': 'Programming Languages',
            },
          ],
        },
        {
          name: 'YouTube',
          confidence: '100',
          version: null,
          icon: 'YouTube.png',
          website: 'http://www.youtube.com',
          categories: [
            {
              '14': 'Video Players',
            },
          ],
        },
        {
          name: 'jQuery',
          confidence: '100',
          version: '1.5.2',
          icon: 'jQuery.svg',
          website: 'https://jquery.com',
          categories: [
            {
              '59': 'JavaScript Libraries',
            },
          ],
        },
      ],
      meta: {
        language: 'es',
      },
    };
    // Result should look like:
    // # Technologies from Wappalyzer of ${url}
    // ## JavaScript Libraries
    // - jQuery
    // - Underscore
    // ## Video Players
    // - YouTube
    const markdownResult = wappalyzerJsonToMarkdown(wappalyzerJson);

    expect(markdownResult).toMatch(new RegExp(`# Technologies .* ${url}`, 'gm'));
    wappalyzerJson.applications.forEach(e => {
      const currentCategory = Object.values(e.categories[0])[0];

      const currentCategorySectionStart = markdownResult.substring(
        markdownResult.search(RegExp(`## ${currentCategory}(.*)`, 'gm'))
      );
      // We remove the ## to from the first to find next index
      const nextSectionStartingIndex = currentCategorySectionStart
        .substring(2)
        .search(/(.*)## (.*)/gm);

      const endSectionIndex =
        nextSectionStartingIndex > 0
          ? nextSectionStartingIndex + 2
          : currentCategorySectionStart.length + 1;

      const currentCategorySection = currentCategorySectionStart.substring(0, endSectionIndex);
      // Checking if we group applications with categories
      expect(currentCategorySection).toMatch(new RegExp(`## ${currentCategory}.*`));
      // Checking if we show the the applications as lists with the link to the website technology
      expect(currentCategorySection).toMatch(new RegExp(`- \\[${e.name}.*`));
    });
  });

  it(`should match this JSON, hardcoded example to check:
    - sort categories by the category identifier
    - sort multiple applications inside each category by name
    - we group applications by categories correctly
    `, () => {
    const url = 'fakeURL.com';
    const wappalyzerJson = {
      urls: {
        [url]: {
          status: 200,
        },
      },
      applications: [
        {
          name: 'React',
          confidence: '100',
          version: '16.8.6',
          icon: 'React.png',
          website: 'https://reactjs.org',
          categories: [
            {
              '12': 'JavaScript Frameworks',
            },
          ],
        },
        {
          name: 'Prism',
          confidence: '100',
          version: null,
          icon: 'Prism.svg',
          website: 'http://prismjs.com',
          categories: [
            {
              '19': 'Miscellaneous',
            },
          ],
        },
        {
          name: 'Apache',
          confidence: '100',
          version: null,
          icon: 'Apache.svg',
          website: 'http://apache.org',
          categories: [
            {
              '22': 'Web Servers',
            },
          ],
        },
        {
          name: 'jQuery',
          confidence: '100',
          version: '1.5.2',
          icon: 'jQuery.svg',
          website: 'https://jquery.com',
          categories: [
            {
              '59': 'JavaScript Libraries',
            },
          ],
        },
        {
          name: 'webpack',
          confidence: '100',
          version: null,
          icon: 'webpack.svg',
          website: 'https://webpack.js.org/',
          categories: [
            {
              '19': 'Miscellaneous',
            },
          ],
        },
      ],
      meta: {
        language: 'es',
      },
    };
    // Result should look like:
    // # Technologies from Wappalyzer of ${url}
    // ## JavaScript Frameworks
    // - React
    // ## Miscellaneous
    // - Prism
    // - webpack
    // ## Web Servers
    // - Apache
    // ## JavaScript Libraries
    // - jQuery
    const markdownResult = wappalyzerJsonToMarkdown(wappalyzerJson);

    expect(markdownResult).toMatch(
      new RegExp(
        `# Technologies(.*)${url}(.*)(\\s*)` +
          '(.*)## JavaScript Frameworks(.*)(\\s*)' +
          '(.*)-(.*)React(.*)(\\s*)' +
          '(.*)## Miscellaneous(.*)(\\s*)' +
          '(.*)-(.*)Prism(.*)(\\s*)' +
          '(.*)-(.*)webpack(.*)(\\s*)' +
          '(.*)## Web Servers(.*)(\\s*)' +
          '(.*)-(.*)Apache(.*)(\\s*)' +
          '(.*)## JavaScript Libraries(.*)(\\s*)' +
          '(.*)-(.*)jQuery(.*)(\\s*)',
        'gm'
      )
    );
  });
});
