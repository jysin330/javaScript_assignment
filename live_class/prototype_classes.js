// class User {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     getFullName() {
//         const fullName = this.firstname + " " + this.lastname;
//         return fullName;
//     }
// }
// let user1 = new User("jyoti", "singh");
// console.log(user1)
// console.log(user1.firstname)
// console.log(user1.getFullName());



//  getter AND setter


// class User {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.score = 0;
//     }
//     getFullName() {
//         const fullName = this.firstname + " " + this.lastname;
//         return fullName;
//     }
//     get getFirstName() {
//         return this.firstname;
//     }
//     get getLastName() {
//         return this.lastname;
//     }
//     set setScore(score) {
//         this.score = score;
//     }
//     get getScore() {
//         return this.score;
//     }
// }
// let user1 = new User("jyoti", "singh");
// console.log(user1)
// console.log(user1.firstname)
// console.log(user1.getFullName());
// console.log(user1.getFirstName);
// console.log(user1.getLastName);
// user1.setScore = 7;
// console.log(user1.getScore);


// inheritance
class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        const fullName = this.firstname + " " + this.lastname;
        return fullName;
    }
}
class UserTwo extends UserOne {

}