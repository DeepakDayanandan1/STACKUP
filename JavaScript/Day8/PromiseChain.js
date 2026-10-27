let promise = Promise.resolve(5);

promise
    .then((number) => {
        return number + 10;
    })
    .then((result) => {
        return result * 3;
    })
    .then((finalResult) => {
        console.log(finalResult);
    });