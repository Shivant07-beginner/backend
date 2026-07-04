/* Types in typescript

 string -> store text
 number -> integers, real
 boolean 
 undefined
 null 
 bigint
 symbol

 var <variable_name = number = <value>
*/ 

let id : number =5;
let id1 : number = 4;

console.log(id + id1);
 
//ex - .png
// let id : number = 2;
// let id1 : number = 3;
// let firstname : string = "sanket"

// console.log(id, "sanket");


// let id : number = 2;
// let id1 : number = 3;
// let firstname : string = "sanket"

// console.log(id, "sanket");


// /**
//  * arrays
//  * let<varaiable_name> :  type[] = [val, val2, ];
//  * 
//  * 
//  * 
//  * 
//  * 
//  */
// // let ids : number[] = [1,2,3,4,3,"4"];
// // let ids1 : any[] = [1,2,3,4,3,"4", false];

// // so in typescript any is a type which can store any datatype


// let data: (number| string| boolean) [] = [1,2,3,"sanket", false];

// console.log(data);
// let data1 : [number , string, boolean] = [1, "sanket", true];
// console.log(data1);

// // how to define types for objects
// // -classes -> data members, member functions
// // -intefercem-> its a contract

// interface Product{
//     name: String;
//     price : number;
//     brand : string;
//     display() : void
// }
// class car{
//     name: String
//     price : number
//     brand : String
//     constructor(name :String , price : number, brand: String){
//         this.name = name;
//         this.price = price
//         this.brand = brand
//     }

// }

// let p1 : Product = {
//     name: "Iphone",
//     price : 10000,
//     brand: "apple",
//     display: ()=>{
//         console.log("display")
//     }
// }
// let p : car  = {
//     name: "Iphone",
//     price : 10000,
//     brand: "apple",
// }
// let c1 = new car("santro", 2000,"sdkdf")

// function sum(a: number, b: number) : number{
//     return a+(b || 0) ;
// }
// console.log(sum(2,4));

// date Object in tspan
 

// date Object in tspan
// const dob= new Date(1994, 3, 11);
// console.log(dob);

// console.log(dob.getDay());

// /**
//  * 
//  * 
//  * any type Object
//  * 
//  * if you eant to define a variable witht type any, then either mention":any while declaring a value
//  * else donot assing any value in it so it will automatically considered as variable of any
//  * 
//  */

//  let x;
//  x = "10";
//  x= 10;




