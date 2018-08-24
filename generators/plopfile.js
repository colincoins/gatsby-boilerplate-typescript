const componentGenerator = require('./component-generator.js');
const pageGenerator = require('./page-generator.js');

module.exports = plop => {
  plop.setGenerator('Component Generator', componentGenerator);
  plop.setGenerator('Page Generator', pageGenerator);
};