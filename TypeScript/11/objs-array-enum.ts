// const person : {
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string];
// } = {
//     name:'max',
//     age:30,
//     hobbies:['game','book'],
//     role:[2,'author']
// }
enum Role{
    ADMIN,READ_ONLY,AUTHOR
}
const person = {
    name:'max',
    age:30,
    hobbies:['game','book'],
    role:Role.READ_ONLY
}
let favoriteActivities:any[];
favoriteActivities = ['sport',22];
console.log(person.role);