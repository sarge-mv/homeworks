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