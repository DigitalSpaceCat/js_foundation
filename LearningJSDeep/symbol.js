const obj = {
  [Symbol.iterator]() {
    let current = 0;
    return {
      next() {
        current += 1;
        return { done: current > 5, value: current };
      },
    };
  }
};
//declared this otherwise for loop wouldn't pass the key values within the iterated array
let a

for (a of obj) {
  console.log(a);
}
//Turns out this is about ec2017. Quokka is not supporting this. 
// const sb = Symbol('creator');
// const obj = {
//   [sb]: 'Gyuri Chloe Kim',
//   a: 1, 
//   b: 2,
// };
// obj.creator;
// obj[Symbol('creator')];
// obj[sb];
// Object.keys(obj);
// console.log(obj);
