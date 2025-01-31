function sumOfNumberProperties(targetObject) {
    if ((typeof targetObject !== "object") || targetObject === null) {
        return undefined;
    }
    let sumOfAllNumbers = null;
    for (let prop in targetObject) {
        if (typeof targetObject[prop] === "number") {
            sumOfAllNumbers += targetObject[prop];
        }
    }
    return sumOfAllNumbers;
}