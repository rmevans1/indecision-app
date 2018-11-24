console.log('App.js is running!');

let visible = false;

const appRoot = document.getElementById('app');

const toggleDetails = () => {
    visible = !visible;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{visible ? 'Hide Details' : 'Show Details'}</button>
            {visible && <p>These are the details to show!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();