// hovering over add tells you the type of the parameters as well as the return statement

function add(n1: number, n2: number): number{
    return n1 + n2; 
}

// special return type of void 

function printResult(num: number): void{
    console.log('Result: ' + num);
}

// function with a callback 

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2; 
    cb(result)
}

printResult(add(5, 12))

// let combineValues: Function; // function type

let combineValues: (a: number, b: number) => number ; // function type that specifies the parameters and the value type


combineValues = add;
// combineValues = printResult; // complains as it does not satisfy the conditions specified above

console.log(combineValues(8,8))