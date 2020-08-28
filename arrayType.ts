const person2 = {
    age: 30,
    name: 'Maximillian',
    hobbies: ['Sports', 'Cooking']
}

let favouriteActivities : string[]; // array of strings
let favouriteActivities2 : any[]; // array of any type - NOT ADVISED TO USE
favouriteActivities = ['Sports'. 1]

console.log(person2.name)

for (const hobby of person2.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) Error!! As map is not a method of type string
}