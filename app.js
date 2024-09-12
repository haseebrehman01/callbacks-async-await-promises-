//synchronus.................................................
// for (let i = 0; i < 1000000000000000000000000000; i++) {
// console.log(i)

// }
// console.log("haseeb")

//asynchronus..............................................

// function runAfter1Sec(){
//     setTimeout(function(){
//         console.log("haseeb")
//     },1000)
// }
// runAfter1Sec()

// console.log("hello")

//callback...................................................

// Callback Function means: When we pass a function as a parameter to another function, we expect it
// to be called after a certain task that may take time (like fetching data) is completed.
// The callback function ensures that we know when the task is done, and it is executed
// once the task completes.
// function runAfter1Sec(callback){
//     setTimeout(function(){
//         console.log("haseeb")
//         callback()
//     },1000)
// }
// function toBeExecutedWhenDone(){
//     console.log("yes its done")
// }
// runAfter1Sec(toBeExecutedWhenDone)

//more example of callback

// function runAfter1Sec(callback) {
//     setTimeout(function() {
//         console.log("Task completed");
//         let result = 5 + 200;
//         callback(result); // The callback is executed after the task is done
//     }, 1000);
// }

// function handleResult(data) {
//     console.log("Callback executed with result:", data);
// }

// runAfter1Sec(handleResult);
// In this example:

// handleResult is the callback function.
// It is passed to runAfter1Sec, which waits for 1 second before calling it with a calculated result.
// This ensures that handleResult runs only after the setTimeout finishes, handling the output of the task.

//callback hell

// function runAfter1Sec(num, callback) {
//   setTimeout(function () {
//     console.log("Task completed with num:", num);
//     let result = 5 + num;
//     callback(result);
//   }, 1000);
// }

// runAfter1Sec(200, function (result1) {
//   console.log("First callback executed with result:", result1);

//   // Now nesting another async call
//   runAfter1Sec(result1, function (result2) {
//     console.log("Second callback executed with result:", result2);

//     // Nesting another async call
//     runAfter1Sec(result2, function (result3) {
//       console.log("Third callback executed with result:", result3);

//       // Nesting yet another async call
//       runAfter1Sec(result3, function (result4) {
//         console.log("Fourth callback executed with result:", result4);

//         // You can keep nesting more callbacks, leading to "callback hell"
//       });
//     });
//   });
// });

// promise....................................................
// function runAfter1Sec(num) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       console.log("Task completed with num:", num);
//       let result = 5 + num;
//       resolve(result);
//     }, 1000);
//   });
// }
// runAfter1Sec(5)
//   .then(function (data) {
//     console.log("First promise executed with data:", data);
//     return runAfter1Sec(data);
//   })
//   .then(function (data) {
//     console.log("Second promise executed with data:", data);
//     return runAfter1Sec(data);
//   })
//   .then(function (data) {
//     console.log("Third promise executed with data:", data);
//     return runAfter1Sec(data);
//   })
//   .then(function (data) {
//     console.log("Fourth promise executed with data:", data);
//     console.log(data)
//     return runAfter1Sec(data);
//   });

// function work(num) {
//   function repeat(resolve) {
//     setTimeout(function () {
//       console.log(num)
//       let data = 5 + num;
//       resolve(data);
//     },1000);
//   }
//   // ....
//   return new Promise(repeat);
// }

// work(5)
//   .then(function (result) {
//     return work(result);
//   })
//   .then(function (result) {
//     return work(result);
//   })
//   .then(function (result) {
//     return work(result);
//   });


//resolve and catch


//async / await ..............................................................................



//try / catch