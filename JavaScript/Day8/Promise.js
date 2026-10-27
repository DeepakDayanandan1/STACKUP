let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully!");
    }, 1000);
    reject("Something went wrong");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });