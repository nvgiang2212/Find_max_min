function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i<arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i<arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let nums = [];
for (let i=0; i<100; ++i) {
    nums[i] = Math.floor(Math.random() * 101);
}

let minValue = findMin(nums);
document.write("<br>");
document.write("The min of value: " + minValue);
let maxValue = findMax(nums);
document.write("<br>");
document.write("The max of value: " + maxValue);