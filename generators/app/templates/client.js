/*global document, window */

import React from 'react';
import debug from 'debug';
import App from './components/App';

const debugClient = debug('babel-eslint2');
const dehydratedState = window.App; // Sent from the server

window.React = React; // For chrome dev tool support

// expose debug object to browser, so that it can be enabled/disabled from browser:
// https://github.com/visionmedia/debug#browser-support
window.appDebug = debug;

debugClient('rehydrating app');

const mountNode = document.getElementById('app');

// mount App component
debugClient('React Rendering');
React.render(
    React.createElement(App),
    mountNode,
    () => debugClient('React Rendered')
);
