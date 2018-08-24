module.exports = {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name?',
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{camelCase name}}.tsx',
        templateFile: 'templates/page-tsx.template'
      }
    ]
};
