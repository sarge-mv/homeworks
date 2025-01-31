function arrayOfNumberProperties(targetObject) {
    if ((typeof targetObject !== "object") || targetObject === null) {
        return undefined;
    }
    let arrayOfProperties = [];
    for (let prop in targetObject) {
        if (typeof targetObject[prop] === "number") {
            arrayOfProperties.push(prop);
        }
    }
    if (arrayOfProperties.length > 1) {
        arrayOfProperties.sort((a, b) => (-1) * a.localeCompare(b));
    }
    return arrayOfProperties;
}