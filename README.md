# gh-pages-starter
Fast start for writing static web site

##Installation
```
git clone https://github.com/maxazan/gh-pages-starter .
```
```
npm install
```
```
grunt
```

##Layouts
###Using existing layouts
/src/layouts/core.hbs - Base layout for all templates

/src/layouts/default.hbs - Default layout. Used by all pages by default.

###Create new layout
1. Create new file in /src/layouts/ directory. For example: /src/layouts/docs.hbs
2. Edit Gruntfile.json
```javascript
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assemble: {
            options: {
                layout: "default.hbs",
                layoutdir: 'src/layouts',
                data: 'src/data/*.json',
                flatten: true
            },
            pages: {
                files: {
                    '.': ['src/pages/*.hbs']
                }
            },
            docs:{
              options:{
                layout: "docs.hbs"
              },
              files: {
                    'docs/': ['src/docs/*.hbs']
              }
            }
        }
    });
    grunt.loadNpmTasks('assemble');
    grunt.registerTask('default', ['assemble']);
};
```
3. Run grunt
4. All files from src/doc will be generated to "docs/" folder using "docs.hbm" layout
##Pages
All pages by default located in src/pages folder, but you can change it in Gruntfile.json.
###Create new page
1. Add new file "yourname.hbs" to src/pages directory
2. Run "grunt" command
3. New file will be generated using default.hbs layout in root directory with name yourname.html

##Data
You can add any data to json file and use it in your page template or layout. As you can see in src/data folder located 2 files.
project.json - project data file.
menu.json - Main menu data file
###Using data
For using data from datafiles write in your tamplate next
```
{{project.name}} - get name from project.json file
```
