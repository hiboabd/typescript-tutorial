function add(n1, n2, showResult, phrase) {
    var result = n1 + n2; // this prevents string concatenation of line 4 by calculating the result before adding it to the phrase
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
// console.log(result); - dont need to console log anymore as the function has output functionality
