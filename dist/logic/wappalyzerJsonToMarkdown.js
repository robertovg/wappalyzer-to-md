"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wappalyzerJsonToMarkdown;

var _groupBy = _interopRequireDefault(require("lodash/groupBy"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _errors = require("../constants/errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIXME find a better way to check types

/**
 * Transform wappalyzer json result into a Markdown with 2 levels:
 */
function wappalyzerJsonToMarkdown(json = {}) {
  // Validations
  if (!(0, _isEmpty.default)(json) && (!json.urls || !json.applications)) {
    throw new Error(_errors.errorWappalyzerJSOStructure.key);
  }

  if ((0, _isEmpty.default)(json)) {
    return '';
  } // Preparing structures to work the output, we sort applications by category.name


  const groupedJsonApplications = (0, _groupBy.default)(json.applications, e => Object.values(e.categories[0])[0]); // We extract the identifier of each category to then be able to sort by.

  const groupsWithPriorities = json.applications.reduce((acc, e) => {
    const currentCategory = Object.entries(e.categories[0])[0];
    const [categoryValue, categoryName] = currentCategory;
    acc[categoryName] = parseInt(categoryValue);
    return acc;
  }, {});
  return `# Technologies from Wappalyzer of ${Object.keys(json.urls)[0]} \n` + Object.keys(groupsWithPriorities).sort((a, b) => groupsWithPriorities[a] - groupsWithPriorities[b]).map(categoryName => `## ${categoryName} \n ${groupedJsonApplications[categoryName].sort(application => application.name.toLowerCase()).map(application => `- [${application.name}${application.version ? ` v${application.version}` : ''}](${application.website}) \n`).join('')}`).join('');
}