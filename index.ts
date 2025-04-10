const myName = "your name";

const hello = (userName: string): string => `hello, ${userName}`;
console.log(hello(myName));

// ---------- Implicit Typing ----------
let country = "Egypt"; // TypeScript infers: string
//country = 123; // ❌ Error: Type 'number' is not assignable to type 'string'

let age = 25; // TypeScript infers: number
 //age = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'

// ---------- Explicit Typing ----------
let city: string = "Cairo";
let year: number = 2025;
let isWorking: boolean = true;


// Function with explicit parameter and return types
function greet(name: string, age: number): void {
 console.log(age);
 // return `Hello, ${name}!`;
}
function greet2(name2) {
    return `Hello, ${name2}!`;
  }
console.log(country);   // Output: Egypt
console.log(age);       // Output: 25
console.log(city);      // Output: Cairo
console.log(greet("Ali",50)); // Output: Hello, Ali!

// Union in Variables Use the | symbol (pipe) to define it.
let ageOrName: number | string;

ageOrName = 25;         // ✅ valid
ageOrName = "twenty";   // ✅ valid
//ageOrName = true;       // ❌ Error: boolean not allowed

function printId(id: number | string) {
    console.log("Your ID is:", id);
  }
  
  printId(101);         // ✅
  printId("A123");      // ✅
  //TypeScript lets you use type guards to work with the right type:

  function process(input: string | number) {
    if (typeof input === "string") {
      console.log(input.toUpperCase());  // ✅ string method
    } else {
      console.log(input.toFixed(2));     // ✅ number method
    }
  }
  //In TypeScript’s strict mode, values like null and undefined are not allowed unless you explicitly include them using union types.
  //📌 Example: Assigning null or undefined
  
    let lastName: string = "Ali";
 // lastName = null;      // ❌ Error in strict mode
  //lastName = undefined; // ❌ Error in strict mode
  //To make this work:
  let firstName: string | null | undefined;

  firstName = "Ali";       // ✅
  firstName = null;        // ✅
  firstName = undefined;   // ✅

  //🔁 Common Use Case: Optional Values
//name?: string is shorthand for name: string | undefined, but also means it's okay to skip it. 
  function greetClass(name?: string) 


    {
  console.log("Hello", name ?? "Guest");
}

greetClass("ali"); // Hello ali
greetClass();        // Hello Guest

// Function that accepts a string or null
function printLength(text: string | null): void {
    if (text !== null) {
      console.log("Length:", text.length); // ✅ safe to access .length
    } else {
      console.log("No text provided.");
    }
  }
  
  // Call the function with a string
  printLength("Hello"); // Output: Length: 5
  
  // Call the function with null
  printLength(null);    // Output: No text provided.
  
  //🟢 void — for functions that don’t return anything
  //If you try to return something other than undefined, TypeScript will complain.

  function logMessage(msg: string): void {
    console.log("Log:", msg);
  }
  //🔴 never — for functions that never finish
  function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {}
  }
  //🟡 any — disables type checking
  let value: any = "Hello";
value = 42;        // ✅ no error
value = true;      // ✅ no error
value.toUpperCase(); // ✅ no error (even if it's a number!)

let input: unknown = "Hello";
//🟠 unknown — like any, but safer

if (typeof input === "string") {
  console.log(input.toUpperCase()); // ✅ safe
}

//There are two ways to write a type assertion:

//✅ Angle-bracket syntax (common in TS, but not allowed in JSX files):
let someValue: unknown = "Hello world";
let strLength: number = (<string>someValue).length;

//✅ as syntax (recommended, and JSX-friendly):


let someValueTo: unknown = "Hello world";
let strLengthTo: number = (someValue as string).length;

// TypeScript typeof (type context)
//Used to extract the type of a variable or function to reuse it as a type.
const user = {
    name: "Sara",
    age: 30,
  };
  
  // Use typeof to get the type of `user` object
  type User = typeof user;
  
  const anotherUser: User = {
    name: "Ali",
    age: 25,
  };
  
  function printValueUseTypeof(val: string | number) {
    if (typeof val === "string") {
      console.log(val.toUpperCase()); // ✅ TypeScript knows it's a string here
    } else {
      console.log(val.toFixed(2));    // ✅ number method
    }
  }
  // --------------------- Enums ------------------------
// Define user roles using Enum
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
  }
  
  // --------------------- Tuple ------------------------
  // Each user has a tuple: [name: string, age: number]
  type UserTuple = [string, number,];
  
  // Create some sample users
  const user1: UserTuple = ["Ali", 28];
  const user2: UserTuple = ["Laila", 32];
  
  // --------------------- Array ------------------------
  // Array of user data (tuples)
  const users: UserTuple[] = [user1, user2];
  
  // --------------------- Combined Example ------------------------
  // Array of user roles
  const roles: UserRole[] = [UserRole.Admin, UserRole.Viewer];
  
  // Display users and their roles
  users.forEach((user, index) => {
    const [name, age] = user;
    const role = roles[index] ?? UserRole.Viewer; // default role if not available
    console.log(`${name} (${age} years old) - Role: ${role}`);
  });
  
  // ------------------ Type Aliases Example ------------------

// Alias for a basic type
type Age = number;

// Alias for a union type representing student status
type EnrollmentStatus = "enrolled" | "graduated" | "dropped";

// Alias for a student object
type Student = {
  id: number;
  name: string;
  age: Age;
  status: EnrollmentStatus;
};

// Alias for a function that takes a student and returns a message
type GreetStudent = (student: Student) => string;

// Create a student
const student1: Student = {
  id: 101,
  name: "Sara",
  age: 21,
  status: "enrolled"
};

// Create a greeting function using the alias
const greetMe: GreetStudent = (student) => {
  return `🎓 Hello, ${student.name}! Your current status is "${student.status}".`;
};

// Use the function
console.log(greetMe(student1));
