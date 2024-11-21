//syntax of function 

//Regular Functions
function addNumber(a: number, b:number): number{
    return a+b;
}

//calling the function 
console.log(addNumber(2,2));

//function Expression
const divide = function(x: number, y: number): number{
    return x/y;
}

console.log(divide(8,2));

//arrow functions 

const multiply = (a:number, b: number):number =>{
    return a*b;
}

console.log(multiply(8,2));

//optional and default parameters

function greet(username:string , greeting?: string): string {
    // return `${greeting ? greeting : ''} ${username}`;
    return greeting ? `${greeting} ${username}` : `${username}`; //ternary operator 
}

console.log(greet("Ajay"));


function greet1(username:string , greeting: string= 'hi'): string {
    return `${greeting} ${username}`;
}
console.log(greet1("ajay"));


//function overloading 
function getLength(value:string): number;
function getLength(value: any[]) :number;
function getLength(value: any):number {
    return value.length;
}

console.log(getLength("ajay"));
console.log(getLength([1,3,2,1,3,12,12]));

//Rest parameters : ... spread operator we can pass any no of argumaetn

function sum(...numbers : number[]):number {
    // return numbers.reduce((total, num) => {
    //     return total + num;
    // },0);

    //or can be retuen as 

    return numbers.reduce((total, num)=> total+num, 0);

}

console.log(sum(12,32,23,23,23));


//can be done with string 

function msg(msg: string, ...names:string[] ):void {
    names.forEach((name)=>{
        console.log(`${msg}, ${name}`);
        
    })
}

console.log(msg("hello",'ajay','sham','gopal','raju'));



