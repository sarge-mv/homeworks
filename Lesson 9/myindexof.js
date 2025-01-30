function myIndexOf(array = [], item, from = 0) {
    if (!Array.isArray(array)) {
        return -1;
    }
    if ((from < ((-1) * array.length)) || (from >= array.length)) {
        return -1;
    }
    if (from < 0) {
        from += array.length;
    }
    for (let i = from; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}