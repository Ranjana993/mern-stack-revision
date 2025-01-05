// console.log("hello world!");


// function Product(name , price){
//   this.name = name;
//   this.price = price;
//   this.getName = function(){
//     console.log("Product name is " + this.name);
//     return this.name
//   }
// }

// let p1 =new Product("iPhone" , 98341241);
// console.log(p1.getName());

// ! Using class methods

class Product {
  constructor(name, email, price) {
    this.name = name;
    this.email = email;
    this.price = price;
    this.getDetails = function () {
      console.log(
        "Name of the product is "+this.name+" and email is "+this.email + " and price is "+this.price 
      );
      
    }
  }
  getName() {
    console.log(this.name);
  }
}

let p1 = new Product("iPhone" , "iphone@gmail.com" , 342324)
console.log(p1.getDetails());
