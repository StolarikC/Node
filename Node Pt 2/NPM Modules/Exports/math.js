// // !!!!!!!!!!!! METHOD 1 !!!!!!!!!!!!
// const add = (x, y) => x + y;

// const PI = 3.14159

// const square = x => x * x;



// // !!!!!!!!!!!! METHOD 2 !!!!!!!!!!!!
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// // }
// // MUST DEFINE EXPORTS FOR OTHER FILES TO BE ABLE TO USE THEM WHEN THE FILE IS "REQUIRED" BY OTHERS

// // IF 'exports' is not otherwise defined, you can define the consts below WITHOUT referencing module first.
// // i.e. 'exports.add = add;' etc.

// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;



// // !!!!!!!!!!!! METHOD 3 !!!!!!!!!!!!
module.exports.add = (x, y) => x + y;
module.exports.PI = 3.14159;
module.exports.square = x => x * x;