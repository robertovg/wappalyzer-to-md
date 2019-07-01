import groupBy from 'lodash/groupBy';
import isEmpty from 'lodash/isEmpty';
import { errorWappalyzerJSOStructure } from '../constants/errors';
/**
 * Transform wappalyzer json result into a Markdown with 2 levels:
 */
export default function wappalyzerJsonToMarkdown(json = {}) {
  // Validations
  if (!isEmpty(json) && (!json.urls || !json.applications)) {
    throw new Error(errorWappalyzerJSOStructure.key);
  }
  if (isEmpty(json)) {
    return '';
  }
  // Preparing structures to work the output, we sort applications by category.name
  const groupedJsonApplications = groupBy(
    json.applications,
    e => Object.values(e.categories[0])[0]
  );
  // We extract the identifier of each category to then be able to sort by.
  const groupsWithPriorities = json.applications.reduce((acc, e) => {
    const currentCategory = Object.entries(e.categories[0])[0];
    const [categoryValue, categoryName] = currentCategory;
    acc[categoryName] = parseInt(categoryValue);
    return acc;
  }, {});

  return (
    `# Technologies from Wappalyzer of ${Object.keys(json.urls)[0]} \n` +
    Object.keys(groupsWithPriorities)
      .sort((a, b) => groupsWithPriorities[a] - groupsWithPriorities[b])
      .map(
        categoryName =>
          `## ${categoryName} \n${groupedJsonApplications[categoryName]
            .sort(application => application.name.toLowerCase())
            .map(
              application =>
                `- [${application.name}${application.version ? ` v${application.version}` : ''}](${
                  application.website
                }) \n`
            )
            .join('')}`
      )
      .join('')
  );
}
