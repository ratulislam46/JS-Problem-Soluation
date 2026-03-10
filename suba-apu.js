let mainText = "Hello";
let reverseText = mainText.split("").reverse();
// console.log(reverseText);


function removeDuplicateNumber(number) {
    console.log("Inside Function:", ...new Set(number))
    return [...new Set(number)]
}
let numbers = [1, 1, 2, 3, 4, 4, 5, 5, 5, 5];
// console.log(removeDuplicateNumber(numbers));



// Prime numbr check 
function primeNumberCheck(number) {
    if (number <= 1) {
        console.log("it is not prime");
        return;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log("it is not prime");
            return;
        }
    }
    console.log("prime");
    return;
};

let primeNumber = 2;
// primeNumberCheck(primeNumber)
