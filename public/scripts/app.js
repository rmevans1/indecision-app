'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

// Create a templateTwo var JSC expression
// div
//  h1 -> Name
//  p -> Age: your age
//  p -> Location: Hometown
// Render templateTwo instead of template
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Robert Evans'
    ),
    React.createElement(
        'p',
        null,
        'Age: 29'
    ),
    React.createElement(
        'p',
        null,
        'Location: Myrtle Beach'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
