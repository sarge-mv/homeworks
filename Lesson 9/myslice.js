function mySlice(array = [], start = 0, end = array.length) {
    if (!Array.isArray(array)) {
        return undefined;
    }
    if (((start < ((-1) * array.length)) || (start >= array.length)) || ((end <= ((-1) * array.length)) || (end > array.length))) {
        return undefined;
    }
    if (start < 0) {
        start += array.length;
    }
    if (end < 0) {
        end += array.length;
    }
    if (end <= start) {
        return undefined;
    }
    let slicedArray = [];
    for (let i = start; i < end; i++) {
        slicedArray.push(array[i]);
    }
    return slicedArray;
}

let arr = [1, 2, 3, 4, 5, 6, 'это массив', [2, 8]];
a = mySlice();
b = mySlice(arr, 2, -7);
c = mySlice(arr, 5, 8);
d = mySlice(arr, -8, 9);
e = mySlice(arr, 7, 8);
console.log(`a = ${a}; b = ${b}; c = ${c}; d = ${d}; e = ${e}`);