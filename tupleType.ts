const person3: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // tuple type
}= {
    age: 30,
    name: 'Maximillian',
    hobbies: ['Sports', 'Cooking'], 
    role: [2, 'author']
}

person3.role.push('admin')
// person3.role[1] = 10 - could switch the second element to be a number as TS thinks role can hold string and number elements and we havent specified that it is a tuple

console.log(person2.name)

for (const hobby of person3.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) Error!! As map is not a method of type string
}