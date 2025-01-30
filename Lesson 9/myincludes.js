function myIncludes(array = [], item, from = 0) {
    if (!Array.isArray(array)) {
        return false;
    }
    if ((from < ((-1) * array.length)) || (from >= array.length)) {
        return false;
    }
    if (from < 0) {
        from += array.length;
    }
    flagNaN = isNaN(item);
    for (let i = from; i < array.length; i++) {
        if ((array[i] === item) || (isNaN(array[i]) && flagNaN)) {
            return true;
        }
    }
    return false;
}