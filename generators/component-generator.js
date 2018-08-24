module.exports = {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/component-tsx.template',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/page.module.scss',
          templateFile: 'templates/module-scss.template',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/page.module.scss.d.ts',
          templateFile: 'templates/declaration-d-ts.template',
        },
      ],
}

