console.log('a');
console.log('b');

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('c');
        resolve();
    }, 3000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('d');
        resolve();
    }, 0);
});

const synchronizedPromise = () => {
    return promise1.then(() => promise2);
};

synchronizedPromise().then(() => {
    console.log('e');
});
