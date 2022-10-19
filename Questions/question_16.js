// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("enter radius");
let pi = Math.PI;
let area = pi * radius * radius;
console.log(`area of circle is ${area}`);
console.log(`area of circle is ${Math.round(area)}`);

let c = 2 * pi * radius;
console.log(`circumference of a circle is ${c}`);
console.log(`circumference of a circle is ${Math.round(c)}`);