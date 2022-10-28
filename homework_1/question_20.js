/*20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F*/

let marks = prompt("enter marks : ");
if (marks >= 80 && marks <= 100) {
    console.log(" you got grade A");

}
else if (marks >= 70 && marks <= 89) {
    console.log(" you got grade B");

}
else if (marks >= 60 && marks <= 69) {
    console.log(" you got grade C");

}
else if (marks >= 50 && marks <= 59) {
    console.log(" you got grade D");

}
else {
    console.log(" you are fail");
}