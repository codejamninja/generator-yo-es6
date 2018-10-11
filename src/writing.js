export default async function writing(yo) {
  yo.fs.copy(
    yo.templatePath(
      'template/shared/generators/app/templates/template/shared/**'
    ),
    yo.destinationPath('generators/app/templates/template/shared')
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/src/**'),
    yo.destinationPath('src'),
    yo.context
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_prettierrc'),
    yo.destinationPath('.prettierrc')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_eslintrc'),
    yo.destinationPath('.eslintrc')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_gitignore'),
    yo.destinationPath('.gitignore')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_npmrc'),
    yo.destinationPath('.npmrc')
  );
  yo.fs.copy(
    yo.templatePath('template/shared/_babelrc'),
    yo.destinationPath('.babelrc')
  );
  yo.fs.copyTpl(
    yo.templatePath('template/shared/_package.json'),
    yo.destinationPath('package.json'),
    yo.context
  );
}
