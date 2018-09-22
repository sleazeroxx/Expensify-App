//
// Object destructuring
//

// With destructuring you can pull object properties apart in to their own variables.

const person = {
    // using name=' ' in the const sets default name
    name: 'Sean',
    age: 32,
    location: {
        city: 'Hitchin',
        temp: 19
    }
};

// const name = person.name;
// const age = person.age;
// inside assignment operator (curly braces), provide the options you want to grab from the object
const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

// the temp variable created is renamed to temperature, ${temp} is no longer defined
const { city, temp: temperature } = person.location;

// if (person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp}C in ${person.location.city}`);
// }

if (city && temperature) {
    console.log(`It's ${temperature}C in ${city}`);
}

/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); */

//
// Array Destructuring
//

const address = [
    '1299 S Juniper Street',
    'Philadelphia',
    'Pennsylvania',
    '19147'
];

// To skip an item leave a comma for that place
const [ , addressCity, addressState = 'New York' ] = address;

console.log(`You are in ${addressCity}, ${addressState}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medPrice] = item;

console.log(`A medium ${itemName} costs ${medPrice}`);

