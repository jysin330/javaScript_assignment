var arr=[2, "jyoti",true, false, "hitesh"];
let myNewArray=[];
for(let i=0; i<arr.length; i++){
    if(typeof arr[i] != "string"){
        myNewArray.push(arr[i]);
    }
}
console.log(myNewArray);