'use strict';

console.log('App.js is running!');

var visible = false;

var appRoot = document.getElementById('app');

var toggleDetails = function toggleDetails() {
    visible = !visible;
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            visible ? 'Hide Details' : 'Show Details'
        ),
        visible && React.createElement(
            'p',
            null,
            'These are the details to show!'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
