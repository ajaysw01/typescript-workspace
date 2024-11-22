//factorial of a no with type annotation 

function factorial(num:number):number{
    //fact of 4 = 4*3*2*1
    if(num ==0 || num == 1){
        return 1;
    }
    return num * factorial(num-1);
}

console.log(factorial(5));



/*
2. Define a function that accepts a user object 
    (with name, age, and email) and returns a formatted string
*/

interface UserData {
    name: string;
    age: number;
    email: string;
  }
  
  function formatUser(user: UserData): string {
    return `User ${user.name} (${user.age} yrs) can be contacted via ${user.email}`;
  }
  
  const user1: UserData = {
    name: "Alice",
    age: 20,
    email: "alice@gmail.com",
  };
  
  console.log(formatUser(user1));

  /*
3. Calculate Total Price: Write a TypeScript function that 
    calculates the total price of an array of product objects. 
    Each product has a price and quantity.
*/

interface Product {
    price : number,
    quantity : number
}

function calculateTotatl(products : Product[]):number{
    return products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
}

let cart : Product[] = [
    {price : 1000, quantity : 2},
    {price: 599, quantity : 3 }
]

console.log(calculateTotatl(cart));


/*
4. Define a union type for a Vehicle that can either 
    be a Car or Bike with different properties. 
    Write a function to log details based on the vehicle type.
*/

type CarData = {
    type : 'car';
    make : string,
    model : string ,
    year : number
};

type Bike = {
    type: 'bike';
    brand: string;
    cc: number;
};

type VehicleData = Bike | CarData;


function getVehicleDetails(vehicle: VehicleData) {
    if(vehicle.type === 'car') {
        console.log(`Car: ${vehicle.make} ${vehicle.model}, Year: ${vehicle.year}`);
    } else if(vehicle.type === 'bike') {
        console.log(`BIke: ${vehicle.brand}, CC: ${vehicle.cc}`);
    }
}

let myCarDetails: VehicleData = {
    type: 'car',
    make: 'Tesla',
    model: 'Model 10',
    year: 2024
};

let myBike: VehicleData = {
    type: 'bike',
    brand: 'BMW',
    cc: 400,
};

getVehicleDetails(myCarDetails);
getVehicleDetails(myBike);