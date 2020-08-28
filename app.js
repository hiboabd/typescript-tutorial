var person = {
    age: 30,
    name: 'Maximillian'
};
console.log(person.name);
// this is a very explicit method and not best practise, it is better to let typescript infer the types
// const person: {
//     name: string;
//     age: number
// } = {
//     age: 30,
//     name: 'Maximillian'
// }
// You can specify that the variable is of type object which is generic
// however this does not specify the properties that it can hold so even though a property exists we don't give any other information 
// to typescript so it doesnt support any properties
// const person: object = {
//     age: 30,
//     name: 'Maximillian'
// }
// assigning an empty curly brace is the same as typing object
