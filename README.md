# A build step into your process.

# Webpack
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

Webpack has become one of the most important tools for modern web development. It’s primarily a module bundler for your JavaScript, but it can be taught to transform all of your front-end assets like HTML, CSS, even images. It can give you more control over the number of HTTP requests your app is making and allows you to use other flavors of those assets (Pug, Sass, and ES8, for example). Webpack also allows you to easily consume packages from npm.

# Setup

```
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install --save-dev webpack webpack-cli
```

# Modules
Webpack knows how to consume ES Modules using import and export statements.

Using npm run build to compile in production mode, all of the unused lodash modules from lodash-es are removed from bundle. This process of removing unused imports is known as tree-shaking, and is something you get for free with Webpack.

```
npm install --save-dev lodash-es
```
# Loaders

Loaders let you run preprocessors on files as they’re imported. This allows you to bundle static resources beyond JavaScript. 

Let’s keep our code modern by running all .js files through the next-generation JavaScript transpiler Babel

```
npm install --save-dev "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env
```

```
{
  "presets": [
    ["@babel/env", {
      "modules": false
    }]
  ],
  "plugins": ["syntax-dynamic-import"]
}
```

This config prevents Babel from transpiling import and export statements into ES5, and enables dynamic imports — which we’ll look at later in the section on Code Splitting.

We’re now free to use modern language features, and they’ll be compiled down to ES5 that runs in all browsers.

## Sass - Loader
Loaders can be chained together into a series of transforms.

These loaders are processed in reverse order:

+ **sass-loader** transforms Sass into CSS.
+ **css-loader**  parses the CSS into JavaScript and resolves any dependencies.
+ **style-loader** outputs our CSS into a &lt;style&gt; tag in the document.

You can think of these as function calls. The output of one loader feeds as input into the next:
	styleLoader(cssLoader(sassLoader("source")))

```
npm install --save-dev style-loader css-loader sass-loader node-sass
```

## CSS in JS
We just imported a Sass file from our JavaScript, as a module.
When we import this module into our JavaScript, style-loader outputs that string into an embedded <style> tag.

## Why would you do such a thing? ##

here are a few reasons to consider:

+ **.** A JavaScript component you may want to include in your project may depend on other assets to function properly (HTML, CSS, Images, SVG). If these can all be bundled together, it’s far easier to import and use.

+ **.** Dead code elimination: When a JS component is no longer imported by your code, the CSS will no longer be imported either. The bundle produced will only ever contain code that does something.

+ **.** CSS Modules: The global namespace of CSS makes it very difficult to be confident that a change to your CSS will not have any side effects. CSS modules change this by making CSS local by default and exposing unique class names that you can reference in your JavaScript.

+ **.** Bring down the number of HTTP requests by bundling/splitting code in clever ways.

# Images - Loader

Handling of images with file-loader

With Webpack, you can optimize this in the case of small images by storing the source of the images as strings inside your JavaScript. By doing this, you preload them and the browser won’t have to fetch them with separate requests later.

```
npm install --save-dev file-loader
```

----
# webpack-demo
webpack-demo

How To Use Redis Enterprise Cloud With AWS Lambda
https://www.youtube.com/watch?v=UJHk1cTfs3g

How to deploy your React App to AWS with the Serverless Framework - Full Tutorial with CloudFront
https://www.youtube.com/watch?v=sMZm8HASKlM

Install and Configure Webpack To work with React
https://www.youtube.com/watch?v=9nJ_LgcwUnc

How to deploy binaries and libraries in AWS Lambda | Nodejs
https://www.youtube.com/watch?v=rhY4jVtl0k8

The Serverless Framework with AWS
https://www.youtube.com/playlist?list=PLmexTtcbIn_gP8bpsUsHfv-58KsKPsGEo

How to create MicroService with Aws Lamdba ?
https://www.youtube.com/watch?v=AOn-_yNI1kM

Introduction to TypeScript and AWS lambda functions with TypeScript
https://www.youtube.com/watch?v=BRSVkfetgxQ


Modules
Dependancy Management
Dynamic Loading

	- Modern programming languages
	
How to Build a Serverless Apollo GraphQL Server with AWS Lambda, Webpack and TypeScript
https://itnext.io/how-to-build-a-serverless-apollo-graphql-server-with-aws-lambda-webpack-and-typescript-64a377739208

How to build an Apollo GraphQL server with TypeScript and Webpack Hot Module Replacement
https://medium.com/free-code-camp/build-an-apollo-graphql-server-with-typescript-and-webpack-hot-module-replacement-hmr-3c339d05184f

Create a Serverless GraphQL server using Express, Apollo Server and AWS Lambda
https://www.sovtech.co.za/create-a-serverless-graphql-server-using-express-apollo-server-aws-lambda/

GraphQL Loader for Webpack
https://www.npmjs.com/package/webpack-graphql-loader

"How to build an Apollo GraphQL server with TypeScript and Webpack Hot Module Replacement"
https://codesandbox.io/s/6y8q0n23wz

How I solved and debugged my Webpack issue through trial, error, and a little outside help.
https://www.freecodecamp.org/news/how-to-solve-webpack-problems-the-practical-case-79fb676417f4/

Getting started with ECMAScript6
https://app.pluralsight.com/guides/getting-started-with-ecmascript6

How to Advanced Webpack 5 - Setup Tutorial
https://www.robinwieruch.de/webpack-advanced-setup-tutorial#webpacks-development-and-production-build

Using Babel and Webpack
https://ccoenraets.github.io/es6-tutorial-data/babel-webpack/

Creating a Node Express-Webpack App with Dev and Prod Builds
https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334


Webpack
======

Understanding JavaScript Modules: Bundling & Transpiling
https://www.sitepoint.com/javascript-modules-bundling-transpiling/

How to Webpack 5 with Babel - Setup Tutorial
https://www.robinwieruch.de/webpack-babel-setup-tutorial

How to Advanced Webpack 5 - Setup Tutorial
https://www.robinwieruch.de/webpack-advanced-setup-tutorial#webpacks-development-and-production-build

A Beginner’s Guide to Webpack 4 and Module Bundling
https://www.sitepoint.com/beginners-guide-webpack-module-bundling/

A mostly complete guide to webpack 5 (2020)
https://www.valentinog.com/blog/webpack/

Frontend build config generator
https://createapp.dev/webpack

Webpack’ing your GraphQL Documents
https://www.apollographql.com/blog/webpacking-your-graphql-documents-bf9697ed259b/

Apollo GraphQL: How to Build a Full-stack App with React and Node Js
https://www.freecodecamp.org/news/apollo-graphql-how-to-build-a-full-stack-app-with-react-and-node-js/

React-apollo HOW TO GRAPHQL
https://www.howtographql.com/react-apollo/1-getting-started/

ReactQL  - React 16 · Apollo 2 Webpack 4
https://reactql.org/

Front End Center — Webpack from First Principles
https://www.youtube.com/watch?v=WQue1AN93YU&t=724s

Creating a Node Express-Webpack App with Dev and Prod Builds
https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334

curl https://raw.githubusercontent.com/sitepoint-editors/webpack-demo/master/src/code.png --output src/code.png

Setting up an ES6 Project Using Babel and webpack
https://www.sitepoint.com/es6-babel-webpack/