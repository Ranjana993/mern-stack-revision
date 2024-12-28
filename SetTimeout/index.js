// setTimeout

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// ! Alternative

function func1() {
  for (var i = 0; i < 5; i++) {
    function inner(i) {
      setTimeout(() => {
        console.log(i)
      }, i * 1000);
    }
    inner(i)
  }
}

func1()


// ? output => 0 , 1 2 3 4


// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }