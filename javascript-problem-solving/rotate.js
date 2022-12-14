const number = [10, 20, 30, 40, 50, 60];

const length = number.length;

const rotate = (number)=>{
    let first = number[0]
    for (let i = 0; i < length; i++) {
        number[i] = number[i + 1];
    }
    number[length - 1] = first
    console.log(number);
}

const rotateByNumber = (number, rotateNumber) => {
    for (let i = 0; i < rotateNumber; i++) {
        rotate(number)
    }
}

rotateByNumber(number, 3)

