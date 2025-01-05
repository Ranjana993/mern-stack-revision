
// let student = {
//   name: "Ranjana",
//   age: 22,
//   email: "abc@gmail.com",
// }

// let student1 = {
//   name: "Raaj",
//   age: 22,
//   email: "raaj@gmail.com",
// }
// let student2 = {
//   name: "Rohit",
//   age: 23,
//   email: "raaj@gmail.com",
// }

// function printInfo(branch , score) {
//   console.log(this);
//   console.log(`Name is ${this.name} and email is ${this.email} and  age is ${this.age} branch ${branch} score ${score}`);
// }



// console.log(student)
// student.printInfo()
// student.printInfo.call(student1);
// student.printInfo.apply(student1)
// printInfo.call(student1 , "CSE" , 567);
// printInfo.apply(student1,[ "CSE", 567]);




// ! example for call
function Category(category) {
  this.category = category
}

function Food(name, price, category){
  Category.call(this , category);
  this.name = name;
  this.price = price;
}

let res = new Food("pizza" , 59 , "fast food");
console.log(res);
