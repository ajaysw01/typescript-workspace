let a1: number = 1;
a1 = 10;

function add(a:number, b:number):number{
    return a+b;
}

const y = add(1,2);
console.log(y);

//Basic Data Types 
let num : number = 1234_234_324;
let num1 : bigint = 2342344352342454324543352n; // n at the end of integer is required
console.log(num);
console.log(num1);


let text:string = "My name is ajay wankhade";
let isAvailable : boolean = true;

let nums : number[] = [1,5,23,435,2];
let charArray : string[] = ['as','asdb','adfa'];

let val : null = null;


let user;
console.log(user);//undefined

let obj : {name: string , age:number} = {
    name : 'Ajay',
    age : 20
}

obj = {...obj, age:44, name:"Wankhade"}; 
console.log(obj);

//any
let value : any;
value = 10;
value = 'a';

function testAnyType(txt:any){
    console.log(txt);
    
}

//Array 

let numArray:number[] = [23,34,23,2,2,23];
let chArray:string[] = ['a','s'];

// chArray.forEach(val => val.includes('a'));
// numArray.forEach(val => val.toFixed(2));

//tuples

let tup: [number, string] =[1,'a'];

let coordinates:[number, number,number]=[10,20,30];

//localhost:4700?name=ajay&phone=1200021

//http reponse
let reponse: [number, string ]= [201,"Success"];





