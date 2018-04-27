# [Book] Learning Javascript written by Ethan Brown
This is my practice note following the book of Ethan Brown. 

### 1.npm Package

```bash
$ npm installl under_score
underscore@1.8.3 node_modules\underscore
```
When you want to specify version.
```bash
$ npm install underscore@1.8.0
underscore@1.8.3 node_modules\underscore
```
This part was not necessary if you have package.json already.
```bash
$ npm init
```

I didn't bother to use --save-dev. I just picked the packages that I want to install on the package.json file. 

```bash
$ npm install
```
### 2. Build:: Gulp

I personally prefer to use webpack but for simple autocompiling, gulp was easier to set.

```bash
$ npm install -g gulp
```
I installed this locally again. 

```bash
$ npm install --save-dev gulp
```

### 3. Transcompiler
Setup the babel.

**ES6 Preset**

```bash
npm install --save-dev babel-preset-es2015
```

**.babelrc**
```
{"presets":["es2015"]}
```

### 4. Set Babel along with Gulp

**gulp-babel** 

`npm install --save-dev gulp-babel`

Change **gulpfile.js** like below.

```js
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('default',function(){
    //Node
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    
    //Public builder files
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
})
```
src("es6/\*\*/*.js"). *\**
**es6/test.js**

```js
'use strict';

const sentences = [
    {subject: 'JavScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'}
];

function say({subject,verb,object}){
    console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentences){
    say(s);
}
```

**public/es6** **gulp** 

`$ gulp`

`$ node es6/test.js`

```
JavScript is great
Elephants are large
```

`$ node dist/test.js`

```
JavScript is great
Elephants are large
```

### 5. Lint

`$ npm install -g eslint`

**ESLint** **.eslintrc**

**.eslintrc** 

`$ eslint -init`

```
? How would you like to configure ESLint? Answer questions about yo
ur style
? Are you using ECMAScript 6 features? Yes
? Are you using ES6 modules? Yes
? Where will your code run? Node
? Do you use JSX? No
? What style of indentation do you use? Tabs
? What quotes do you use for strings? Double
? What line endings do you use? Windows
? Do you require semicolons? Yes
? What format do you want your config file to be in? JavaScript
Successfully created .eslintrc.js file in C:\node
```
ESlint Usage
- eslint es6/test.js 
-  Gulpfile ESLint

`$ npm install --save-dev gulp-eslint`

**gulpfile.js**

```js
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default',function(){
    //ESLint
    gulp.src(["es6/**/*.js","public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
    
    //Node
    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    
    //Public builds
    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
})
```


`$ gulp`

```
[00:22:26] Using gulpfile C:\node\gulpfile.js
[00:22:26] Starting 'default'...
[00:22:27] Finished 'default' after 127 ms
[00:22:33]
C:\node\es6\test.js
   1:1   error  Strings must use doublequote                      quotes
   4:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   4:15  error  Strings must use doublequote                      quotes
   4:34  error  Strings must use doublequote                      quotes
   4:48  error  Strings must use doublequote                      quotes
   5:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   5:15  error  Strings must use doublequote                      quotes
   5:34  error  Strings must use doublequote                      quotes
   5:49  error  Strings must use doublequote                      quotes
   9:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   9:5   error  Unexpected console statement                      no-console
  13:1   error  Expected indentation of 1 tab but found 4 spaces  indent

C:\node\public\es6\test.js
   1:1   error  Strings must use doublequote                      quotes
   4:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   4:15  error  Strings must use doublequote                      quotes
   4:34  error  Strings must use doublequote                      quotes
   4:48  error  Strings must use doublequote                      quotes
   5:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   5:15  error  Strings must use doublequote                      quotes
   5:34  error  Strings must use doublequote                      quotes
   5:49  error  Strings must use doublequote                      quotes
   9:1   error  Expected indentation of 1 tab but found 4 spaces  indent
   9:5   error  Unexpected console statement                      no-console
  13:1   error  Expected indentation of 1 tab but found 4 spaces  indent

✖ 24 problems (24 errors, 0 warnings)
  22 errors, 0 warnings potentially fixable with the `--fix` option.
  ```
The error messages summaries
- Strings must use doublequote 
- Expected indentation of 1 tab but found 4 spaces  indent
- Unexpected console statement

**.eslintrc**  **(http://eslint.org)**


```
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
           
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "off", 
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        
        "no-console": "off",
    }
};
```

Additional references:
- ESLint Config - [http://eslint.org/docs/user-guide/configuring](http://eslint.org/docs/user-guide/configuring)
- ESLint Rules - [http://eslint.org/docs/rules/ ](http://eslint.org/docs/rules/)

To be honest, this is way too much setup. I found https://es6console.com/ is very useful to learn ES6.