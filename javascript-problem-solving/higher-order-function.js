function generateTwoRandomNumber(max, cb) {
    const random1 = Math.floor(Math.random() * max);
    const random2 = Math.floor(Math.random() * max);
    const result = cb(random1, random2);
    console.log(random1, random2);
    return result;
}

generateTwoRandomNumber(100, (random1, random2) => {
    console.log(random1, random2);
})
generateTwoRandomNumber(100, (random1, random2) => {
    console.log(random1 + random2);
})
generateTwoRandomNumber(100, (random1, random2) => {
    console.log(random1 - random2);
})