// 1. Using a for-loop
function sumFor(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log('sumFor:', sum);
    return sum;
}
// 2. Using a while-loop
function sumWhile(numbers) {
    var sum = 0;
    var i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    console.log('sumWhile:', sum);
    return sum;
}
// 3. Using recursion
function sumRecursion(numbers) {
    function helper(index) {
        if (index === numbers.length) {
            return 0;
        }
        return numbers[index] + helper(index + 1);
    }
    var result = helper(0);
    console.log('sumRecursion:', result);
    return result;
}
// 4. Using Array functional programming (reduce)
function sumTheFunctionalWay(numbers) {
    var sum = numbers.reduce(function (total, value) { return total + value; }, 0);
    console.log('sumTheFunctionalWay:', sum);
    return sum;
}
// Test case
console.log(sumFor([1, 2, 3, 4])); // 10
console.log(sumWhile([1, 2, 3, 4])); // 10
console.log(sumRecursion([1, 2, 3, 4])); // 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // 10
