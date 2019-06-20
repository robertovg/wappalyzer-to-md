class Wappalyzer {
  constructor(url) {
    this.analyze = jest.fn(
      () =>
        new Promise(resolve => {
          resolve(
            // Simple mocking, if url contains error we return the error response
            url.match(/error/g)
              ? {
                  urls: {
                    [url]: {
                      status: 0,
                      error: {
                        type: 'NO_RESPONSE',
                        message: 'No response from server',
                      },
                    },
                  },
                  applications: [],
                  meta: {},
                }
              : {
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
                }
          );
        })
    );
  }
}
module.exports = Wappalyzer;
