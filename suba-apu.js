let mainText = "Hello";
let reverseText = mainText.split("").reverse();
// console.log(reverseText);


function removeDuplicateNumber(number) {
    console.log("Inside Function:", ...new Set(number))
    return [...new Set(number)]
}
let numbers = [1, 1, 2, 3, 4, 4, 5, 5, 5, 5];
// console.log(removeDuplicateNumber(numbers));


