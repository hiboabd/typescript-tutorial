// you shouldnt use unknown all the time but its better than all
let userInput: unknown;
let userName: string;  

userInput = 5;
userInput = 'Max'

// this method doesn't work as usename only accepts type string
userName = userInput 

/// this method works 
if (typeof userInput === 'string'){
    userName = userInput;
}

// Never type 

function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
}

var result = generateError('An error occurred', 500)
