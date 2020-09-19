let path = require('path');
// configure Webpack to exclude all packages under the node_modules folder
let nodeExternals = require('webpack-node-externals');

// include babel-loader to run on all .js files. We will create a shared object defining the module section that we can re-use for both targets
const moduleObj = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
        }
    ],
};

// entry point, for the web application
const client = {
    entry: {
        'client': './src/client/index.js'
    },
    target: 'web',
    output: { //  specify where Webpack will output the bundle and set the target build so that it ignores native node modules like ‘fs’ and ‘path’ from being bundled. For client, we will set it to web
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: moduleObj
};

// entry point, for the other for the web server
const server = {
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {//  specify where Webpack will output the bundle and set the target build so that it ignores native node modules like ‘fs’ and ‘path’ from being bundled. for server we will set it to node.
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()] // configure Webpack to exclude all packages under the node_modules folder
};
module.exports = [client, server];