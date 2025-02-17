function indexOfLastSepataror(str) {
    const listOfSeparators = ' \t(,.!?:;)/';
    let lastIndex = -1;
    let currentIndex = -1;
    for (let separator of listOfSeparators) {
        if ((currentIndex = str.lastIndexOf(separator)) > lastIndex) {
            lastIndex = currentIndex;
        }
    }
    return lastIndex;
}

function stringTruncate(str, stringLimit) {
    if (str.length <= stringLimit) {
        return str;
    }
    let resultString = '';
    const indexToTruncateUpTo = indexOfLastSepataror(str.slice(0, stringLimit));
    if (indexToTruncateUpTo > 0) {
        resultString = str.slice(0, indexToTruncateUpTo);
    }
    return resultString + '…';
}