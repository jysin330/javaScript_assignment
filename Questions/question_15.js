// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = 0;

if (x == 0) {
    let y = 2 * x - 2;
    var x1 = x;
    var y1 = y;
    console.log(`the point at y-itercept of y=2x -2 is (${x1},${y1}).`);
}
y = 0;
if (y == 0) {
    x = (y + 2) / 2;
    var x2 = x;
    var y2 = y;
    console.log(`the point at x-itercept of y=2x -2 is (${x2},${y2}).`);

}

let slope_m = (y2 - y1) / (x2 - x1);
console.log("the slope ,  x-intercept and y-intercept of y = 2x -2 is " + slope_m);
