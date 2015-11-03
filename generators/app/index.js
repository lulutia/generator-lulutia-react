'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the luminous ' + chalk.red('Lulutia') + ' generator-react!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      if(this.props.someOption===true){
      done();}
      else {
        return ;
      }
    }.bind(this));
  },

  writing: {
    app: function(){
        mkdirp("app");
        mkdirp("assets");
        mkdirp("assets/module");
        mkdirp("assets/style");
        mkdirp("build");
        
       this.fs.copy(
               this.templatePath('coffeelint.json'),
               this.destinationPath('coffeelint.json')
             );
       this.fs.copy(
               this.templatePath('.gitignore'),
               this.destinationPath('.gitignore')
             );
       this.fs.copy(
               this.templatePath('index.html'),
               this.destinationPath('index.html')
             );
       this.fs.copy(
               this.templatePath('package.json'),
               this.destinationPath('package.json')
             );
       this.fs.copy(
               this.templatePath('server.js'),
               this.destinationPath('server.js')
             );
       this.fs.copy(
               this.templatePath('webpack.config.js'),
               this.destinationPath('webpack.config.js')
             );
       this.fs.copy(
            this.templatePath('less/style.less'),
            this.destinationPath('assets/style/customer.less')
      );
       this.fs.copy(
            this.templatePath('module/layout.jsx'),
            this.destinationPath('assets/module/layout.jsx')
      );
       this.fs.copy(
            this.templatePath('main/profile.jsx'),
            this.destinationPath('app/profile.jsx')
      );

    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
    }

  },
  install: function () {
    this.installDependencies();
  }

});