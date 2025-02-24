function createLogger() {
    let messages = [];
    return {
        log: function(message) {
            messages.push(message);
        },
        getLogs: function () {
            console.log(messages);
        }
    };
}