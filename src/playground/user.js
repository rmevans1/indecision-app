const user = {
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

//h1 Ternary operator
//p logical and
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);