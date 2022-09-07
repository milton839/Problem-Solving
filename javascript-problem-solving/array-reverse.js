const array = [1, 2, 3, 4, 5];
const length = array.length;
/**
 *  !Method-01
 */
// console.log(array.reverse());


/**
 * !Method-02
 */
// const newArray = [];

// for(let i = length - 1; i >= 0; i--){
//     newArray.push(array[i]);
// }
// console.log(newArray);

/**
 * !Method-03
 */

// const revArray = array.map((item, index)=>array[array.length-1-index])
// console.log(revArray);

/**
 * ! Method - 04
 */
// var i = 0;
// while (i < array.length - 1) {
//     array.splice(i, 0, array.pop());
//     i++;
// }
// console.log(array);
