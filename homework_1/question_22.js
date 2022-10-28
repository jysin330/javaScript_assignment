// 22. Write a program which tells the number of days in a month.

let Month = prompt("enter month number: ");
let numberOfDays;

let now = new Date();
now.setMonth(Month);

for (let i = 0; i <= 32; i++) {
    if (Month != now.getMonth()) {
        break;
    }
    now.setDate(i);
    numberOfDays = now.getDate();
}

console.log(numberOfDays);