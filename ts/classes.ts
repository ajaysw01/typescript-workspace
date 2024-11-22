class Admin {
    name : string;
    age : number ; 

    constructor(name : string, age:number) {
        this.name = name;
        this.age = age;
    }

    greet():string {
        return `hello my name is  ${this.name} and age is ${this.age}`
    }

}


//object of claas 

const admin = new Admin("Diya",18);
console.log(admin.greet());
console.log(admin.name);


/* 
access modifiers (public, private, protected)

public: Accessible from anywhere. This is the default if no modifier is specified.
private: Accessible only within the class.
protected: Accessible within the class and its subclasses.
*/
