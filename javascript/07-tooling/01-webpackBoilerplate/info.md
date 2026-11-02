# About this section

A webpack config is utilized whenever we want to gather multiple web files into smaller bundles so they'll load faster when being sent to the browser.

In this scenario, I'm building a boilerplate based on standard Webpack + Babel so the app converts modern ES6 script into ES5, granting compatibility, and bundles the files into smaller outputs by using the following Node libs:

- @babel/preset-env
- @babel/cli
- @babel/core
- babel-loader
- webpack
- webpack-cli
- regenerator-runtime
- core-js

``
npm i --save-dev @babel/preset-env @babel/cli @babel/core babel-loader webpack webpack-cli
``
``
npm i core-js regenerator-runtime
``

## Running

To run the project, browse to this 01-webpackBoilerplate into the terminal and run ``npm run load`` with Node and NPM installed.
