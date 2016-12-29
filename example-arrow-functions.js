// var names = ['andrew', 'julie', 'jen', 'sid'];
// //
// // names.forEach(function(name) {
// //   console.log('forEach', name);
// // })
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// //   console.log('something else');
// // });
// //
// // names.forEach((name) => console.log(name));
//
//
// // var returnMe = (name) => name + '!';
// // console.log(returnMe('sid'));
//
//
// //anonymous functions have a this binding, arrow functions take whatever their parent's this binding
//
// var person = {
//   name: 'sid',
//   greet: function () {
//     names.forEach(function(name) {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// }
// //in here this can't get up to person.name. so it will return undefined.
// person.greet();
//
//
// var person = {
//   name: 'sid',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// }
// //this arrow function works like expected bc arrow functions take parent's this
// person.greet();


//challenge area
function add(a,b) {
  return a+b;
}


//addStatement uses curly braces
var addStatement = (a,b) => { return a + b;};
//addExpression uses expression one liner
var addExpression = (a,b) => a+b;

console.log(add(1,3));
console.log(add(9,0));

//make 2 arrow functions
console.log(addStatement(3,4));
console.log(addExpression(100,6));
