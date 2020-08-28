function add(n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 + n2; // this prevents string concatenation of line 4 by calculating the result before adding it to the phrase
    if (showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '

const result = add(number1, number2, printResult, resultPhrase);
// console.log(result); - dont need to console log anymore as the function has output functionality