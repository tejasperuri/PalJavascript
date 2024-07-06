// console.log('Hello I\'m here');

// var foo = "Hello world";
// console.log(foo);


// var greeting = function (personName) {
//     var text = "From: greeting::: Hello " + personName + ". Hope you having a good day";
//     return text;
// }

// var greetingRetFunc = function (personName) {
//     var text = "From: greetingRetFunc::: Hello " + personName + ". Hope you having a good day";
//     return function () {
//         console.log(text);
//     }
// }

// var greet = greeting("John");
// var greet1 = greetingRetFunc("John1");

// console.log(greet);
// greet1();


// var newObject = {
//     name: "John",
//     age: 30,
// }
// console.log(newObject);
// console.log("Print only Age: " + newObject.age);


// var newObjectWithFunc = {
//     name: "Rebecca",
//     age: 30,
//     greet: function () {
//         console.log("Hello " + this.name);
//         console.log("Hello " + newObject.name);
//     }
// }
// newObjectWithFunc.greet();
//================================================
//Anonymous Function
// (function () {
//     console.log("Hello from anonymous function");
// })();


// var testingAnonScope;

// (function () {
//     var baz = "Anon baz value";
//     testingAnonScope = function(){
//         console.log(baz);
//     }
//     console.log("Hello from anonymous function");
// })();

// // console.log(baz); - ReferenceError: baz is not defined

// testingAnonScope();
//================================================
//Closures
// var closureTest = function (i) {
//     // console.log(i);
//     return function() { console.log(i); };
// }
    
// var printClosureValue = closureTest(1);
// printClosureValue();

//================================================

// var outerObj = {
//     myName: 'outer',
//     outerFunction: function() {
//         var self = this;

//         var innerObj = {
//             myName: 'inner',
//             innerFunction : function() {
//                 console.log(self.myName+" , " +this.myName);
//             }
//         }

//         innerObj.innerFunction();
//         console.log(this.myName);
//     },
// };

// outerObj.outerFunction();

//================================================

//let vs var
// function testingVar() {
//     var a = 'helloVar';
//     console.log(a);

//     if(a == 'helloVar') {
//        a = 'helloVar2';
//        let b = "helloLet";
//        console.log(b);
//     }

//     console.log(a);
// }
// testingVar();
//================================================


function sayHello() {
    console.log("Hello " + this.name+" my age is "+this.age);
}

var obj = { name: "Sandy"};

// console.log(sayHello.call(obj));




