console.log('App.js is running!');

// ternary operators
// logical and operator

// create app object title/subtitle
// use title/subtitle in the template

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Robert',
    age: 29,
    location: 'Myrtle Beach'
};

// IF Statement
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);