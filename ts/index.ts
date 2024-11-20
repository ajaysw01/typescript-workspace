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

//enum 
enum Color {
    RED= 'red', 
    GREEN = 'green',
    BLUE ='blue'
}

console.log(Color.BLUE);

// enum Size {
//     Small=1,
//     Medium,
//     Large
// }

const enum Size {
    Small=1,
    Medium,
    Large
}


let size : Size = Size.Medium;
console.log(size);


//unknown type 
let notSure: unknown = 'a';

if(typeof(notSure) === 'number'){
    notSure.toFixed(2);
}else if(typeof(notSure) === 'string'){
    notSure.length;
}


//never : types which never occured

function infiniteLoop(): never{
    while(true){
        //do something endlessly
        console.log(1);
        
    }
}

// infiniteLoop();


function throwError(message: string ) : never{
    throw new Error(message);
}

// throwError("Something went wrong")

//void type 

function logMessage(message:string ):void{
    console.log(message);
    // return undefined;
    
}

logMessage("Lets Nacho");



//type inference 

let username = 'Nikhil'; //typescript infers the type as string 

// type assertions 
let someVal : any = 'Ajju Bhai ';
let strLength : number = (someVal as string).length;

console.log(strLength);


// union types 
let id : string | number; // id can be strign or number

id = 'abc';
id = 123;


function printId(id: string | number){
    console.log('id : ${ id }');
    
}

printId('xyz');
printId('4543');

//type narrowing 

function printIdfn(id: string | number){
    if(typeof(id)=== 'string'){
        console.log('id is a string : ', id.toUpperCase);
        
    }else{
        console.log('id is a number : ${ id } ');
        
    }
    
}

printIdfn('ajjub bhai ')


//interface 

interface Person {
    name : string ;
    age : number;
    greet() : void;
}


let person : Person = {
    name: 'ajay',
    age: 24,
    greet: function (): void {
        console.log("Function not implemented.");
    }
}


person.greet();



//interface with function types
interface MathOp{
    (a:number, b:number) : number;
}

const add1 : MathOp = (x,y) => x+y;
const subtract : MathOp = (x,y) => x-y;


console.log(subtract(5,4));
console.log(add1(5,4));


//type alias

//type AliasName = TypeDefinition : to give alias ot the types 

type UserId = string; 
let userId: UserId = 'abc';


type Person1 = {
    name: string;
    age: number;
};
let person1: Person1 = {
    name: 'abc',
    age: 12
};


type ID = string | number ; 

let userId1 : ID = 'abc';

let orderId : ID = 101;

//interfaces vs type

interface User {
    name : string ;
    phoen : number
}

interface Customer extends User{
    address : string 
}


let myCustomer : Customer = {
    address: "ngp",
    name: "xyz",
    phoen: 1231431
}

type Vehicle = {
    name : string,
    modelNo : number 
}


// & - denotes intersetion types 
type Car = Vehicle & {
    isElectric : boolean;
}


let myCar: Car ={
    name : 'maruti',
    modelNo : 800,
    isElectric : true
}