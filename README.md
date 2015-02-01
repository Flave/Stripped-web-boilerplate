This is a boilerplate for simple web projects. It is set up using grunt. Run `$ npm init` to set up a new project.

Some readme changes

The development happens in `src/`. Running `grunt` or `$ grunt build` creates a new folder in root called `dist/`. It precompiles sass files and minifies them. the same happens to js files stored in `src/js`.

`$ grunt watch` simply watches all the files in `src/` as well as the `Gruntfile.js` itself for changes. For local development and to make use of livereload serve the files via a webserver and start the livereload browser plugin.
