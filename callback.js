function callbackDemo(name, callback) {
return callback(`Hello, ${name}`);
}

console.log(callbackDemo("amey", (params) => params))