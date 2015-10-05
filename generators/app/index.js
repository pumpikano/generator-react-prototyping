'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var str = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the exquisite ' + chalk.red('react-prototyping') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        validate: function(input) {
            return !!input;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description:',
        validate: function(input) {
            return !!input;
        }
      }
    ];

    this.prompt(prompts, function (props) {
      this.displayName = props.name;
      this.name = str.slugify(props.name);
      this.description = props.description;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template('_package.json', 'package.json', this.context);
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('babelrc'),
        this.destinationPath('.babelrc')
      );
      this.fs.copy(
        this.templatePath('client.js'),
        this.destinationPath('client.js')
      );
      this.fs.copy(
        this.templatePath('index.js'),
        this.destinationPath('index.js')
      );
      this.fs.copy(
        this.templatePath('start.js'),
        this.destinationPath('start.js')
      );
      this.fs.copy(
        this.templatePath('webpack-dev-server.js'),
        this.destinationPath('webpack-dev-server.js')
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(
        this.templatePath('components'),
        this.destinationPath('components')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
