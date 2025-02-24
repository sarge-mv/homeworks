function createRandomGenerator(min, max) {
    return function () {
        return Math.floor(Math.random() * (max - min) + min);
    };
}