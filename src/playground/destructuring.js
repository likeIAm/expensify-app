const person = {
    name: 'Luca',
    //age: 32,
    location: {
        city: 'Malta',
        temp: 24
    }
};
console.log(`My name is ${person.name} and my age is ${person.age} and I live in ${person.location.city}`);
// Destructuring
// const { name, age } = person;
// console.log(`My name is ${name} and my age is ${age}`);

const { name: firstName, age = 'Unknown is default value' } = person;
console.log(`My name is ${firstName} and my age is ${age}`);

const {city, temp} = person.location;
if (city && temp) {
    console.log(`And I live in ${city} with a temperature of ${temp}`);
}

const book = {
    title: 'Che te lo dissi',
    author: 'Wewe',
    publisher: {
        //name: 'Punguin'
    }
};

const { name: publisherName = 'Self published'} = book.publisher;
console.log(`The publisher is ${publisherName}`);