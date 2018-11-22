console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// Create a templateTwo var JSC expression
// div
//  h1 -> Name
//  p -> Age: your age
//  p -> Location: Hometown
// Render templateTwo instead of template
var templateTwo = (
    <div>
        <h1>Robert Evans</h1>
        <p>Age: 29</p>
        <p>Location: Myrtle Beach</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);