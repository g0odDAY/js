function convertToBinary (number, bin) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}
console.log(convertToBinary(9));
console.log(convertToBinary(20));
console.log(convertToBinary(28));
console.log(convertToBinary(18));
console.log(convertToBinary(11));
console.log((9).toString(2));