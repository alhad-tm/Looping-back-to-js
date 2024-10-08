//Functions

function myFunc() {
  let a = 26;
  let b = 77;
  c = a + b;
  console.log(c);
}

myFunc();

function MyNewFunc() {
  let d = 22;
  return d;
}

console.log(MyNewFunc());

function newFunc() {
  let a = 321;
  completeFn();
  return a;
}

function completeFn() {
  console.log("completed");
}

console.log(newFunc());


//passing parameter

function addFunction(val){
    let a=111;
    let b=val;
    c=a+b;

    return c;

}

console.log(addFunction(12));


//Objects

let user={
    name:"Sam",
    age:32,
    place:"NewYork"

}
console.log(user);
console.log("place : ",user.place);
