// JS way
// const person = {
//     name:"Maximilian",
//     age: 30,
//     // array
//     hobbies: ["Sports", "Cooking"],
//     // js array
//     role: [2, 'author']
// };

// enum?
// js way
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum way
// this auto-signs ADMIN = 1, READ_ONLY = 2, etc.

enum Role { ADMIN, READ_ONLY, AUTHOR };

// if the start one is changed, 
// the second one is changed as well, like 6
// enum Role { ADMIN=5, READ_ONLY, AUTHOR };
// this is also ok, but not recommended
// enum Role { ADMIN=5, READ_ONLY="hello", AUTHOR="true" };

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

// for normal array push
// this can be done, but not safe
// person.role.push("admin");
// person.role[1] = 10;

// ts style object
// const person: object = {
// or
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // ts tuple
//     // strictly two element
//     // first is number, second is string
//     role: [number, string];
// } = {
//     name:"Maximilian",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, 'author']
// };

// in ts, this throws error
//  10 is not assignable to string
// person.role[1] = 10;

//  but push works
// it intellegently update second element
// be aware of this
// person.role.push("admin");

// size do not match
// person.role = [0, "admin", "helo"]


// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log("is admin");
}