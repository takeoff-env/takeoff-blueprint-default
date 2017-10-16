# Takeoff Frontend App

The Takeoff Frontend is a batteries-included application that is designed to get you kickstarted with the frontend of your application.

> **Please note that the application is currently under heavy development and you may find parts broken. I am aiming to release 1.1 by the end of October that will include a more stable starting example**

Out of the box you get an application that is designed to hot reload with allowing you to write using ES6, ES7 and ES8 features, and preconfigued so you can start writing code.

The complete application includes:

* [React 16.0](https://reactjs.org/)
* [Webpack](https://webpack.github.io/) / [Babel](https://babeljs.io/) / [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* [Redux](https://github.com/reactjs/react-redux)
* [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy)
* [Reactstrap](https://reactstrap.github.io/)
* [JSON Web Token Authentication](https://jwt.io/)
* 



The architecture is that the `index.js` file boostraps the app inside a `react-hot-loader` application (there is also some service worker stuff here, but that will be discussed later).

The main App then creates the Redux store and React Router, and triggers the View.

Inside the view is then a NavBar and main Switch for the router, here you can define routes to components.  Inside the NavBar you have the opertunity to add Link tags that will generate router calls.

Currently the app uses the HashRouter until an issue with the proxy can be resolved.

## API Documentation

* [Configuring using environment variables](docs/using-env-file.md)
