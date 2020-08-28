// custom type - always capitalise!! 
type Combinable = number | string; 
type ConverstionDescriptor = 'as-number' | 'as-text'

function combine(
    input1: number | string, // union type
    input2: Combinable, // custom type 
    resultConversion: 'as-number' | 'as-text' // literal type
    ) {
    let result; 
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; // pluses to convert to integers
    } else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number'){
    //     return +result
    // } else {
    //     return result.toString();
    // }
    return result; 
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
