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
###Create new page
##Data

