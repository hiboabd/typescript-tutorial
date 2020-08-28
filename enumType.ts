enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'};

const person4 = {
    age: 30,
    name: 'Maximillian',
    hobbies: ['Sports', 'Cooking'], 
    role: Role.ADMIN
}

person3.role.push('admin')
// person3.role[1] = 10 - could switch the second element to be a number as TS thinks role can hold string and number elements and we havent specified that it is a tuple

console.log(person4.name)

for (const hobby of person4.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) Error!! As map is not a method of type string
}