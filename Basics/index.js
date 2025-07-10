// To output some text (We can use '', "", or ``(Template Literal))
// console.log(`Hello`)
// console.log(`I like pizza`)

// To create a alert window
// window.alert(`This is an alert`)
// window.alert(`I like pizza`)

/*
    This
    is
    a
    multi-line
    comment
*/

// document meaning document of our webpage 
// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like pizza!";

// let age = 10;
// let gpa = 7.83;
// let price = 500;

// console.log(`I am ${age} years old`);
// console.log(`Price is ₹${price}`);
// console.log(`Gpa is : ${gpa}`);
// console.log(typeof age)

// let name = "Geethul Krishna G D";
// let age = 20;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${name}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// Augmented Operator
// Age += 1;

// Increment Operator
// Age++;

// Decrement Operator
// Age--;

// Window Prompt 
// let username;
// username = window.prompt("Enter username");
// console.log(username);

// Text Box

// let username;

// document.getElementById("myButton").onclick = function (){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter radius");
// circumference = 2 * PI * radius;

// console.log(circumference);

let radius, circumference;
const PI = 3.14;

document.getElementById("submit").onclick = function() {
    radius = document.getElementById("rad").value;
    radius = Number(radius)
    circumference = 2 * radius * PI;
    document.getElementById("per").textContent = `Perimeter is: ${circumference}`;
}