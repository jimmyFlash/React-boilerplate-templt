# React-Boilerplate

This is my react-boilerplate, created from scratch. using Bable, React, WebPack, Jest for unit testing and Enzyme for React component testing

## Setup

```bash
npm install
npm run build
npm start
```

## Stuff ToDO in future

- Enable cache busting in Webpack
- CSS file bundling using css-loader in webpack
- Enable source maps in webpack
- Add debug commands to package.json
- Hot module replacement
- Auto-restart web server when changes are detected via nodemon

### Notes

1. src/client/snapshots/app.test.js.snap. Contains the serialized structure of our react component. It must be checked into Git so it can be used to compare against the dynamically generated snapshot during a test run.
