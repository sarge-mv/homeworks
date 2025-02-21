function myFilter(array, callback) {
    if (!(Array.isArray(array)) || !(typeof callback === 'function')) {
        console.log('Ошибка! Должны передаваться параметры: массив, функция!');
        return undefined;
    }
    let resultArray = [];
    let callbackWrapper = function (callbackFunc, item, index, array) {
        if (callbackFunc.length === 1) {
            return callbackFunc(item);
        } else if (callbackFunc.length === 2) {
            return callbackFunc(item, index);
        } else {
            return callbackFunc(item, index, array);
        }
    };
    for (let i = 0; i < array.length; i++) {
        if (callbackWrapper(callback, array[i], i, array)) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}