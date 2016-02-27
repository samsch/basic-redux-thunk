# basic-redux
A super basic redux app, with thunk and logger middleware, and basic asynchronous example.

To run, clone this project, and point a web server at public/.

This app has two action types, two matching reducers, and a container. If it were a more complex app, you would also have some pure rending components in `src/components/`.

To make changes, run `npm install`, then you can run `npm run dev` to set Webpack to watch for changes and build with sourcemaps, or `npm run build` to build with uglify (and no sourcemaps).

## Easy server
If you don't have a server setup, you can use http-server from npm. Install globally with `$ npm install http-server -g`, then run `$ http-server public/` from the project root. You can then view the example app by navigating to `http://localhost:8080` in your browser.

## Credits
I followed the main body of instructions from this article: [Setting Up a React.js Environment Using Npm, Babel 6 and Webpack](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack) to setup Webpack and Babel.
