// this
var student = {
    name: "John",
    getName: function(){
        console.log(this.name);
        return this.name;
    }
};
var _deSutudent = student.getName();
// chain
function step1 () {  
    console.log(te);
  
  }
  
  function step2 () {  
     te = 2;
     step1();
  
  }
  step2();
  
  var te ="Global variables";

// Curry
function add(a, b, c) {
    return a + b + c;
  }
  
  console.log(add(1, 2, 3));
  
  function addCurries(a) {
    return (b) => {
      return (c) => {
        return a + b + c;
      };
    };
  }
  
  console.log(addCurries(1)(2)(3));
  
  const add1 = addCurries(1);
  
  const add2 = add1(2);
  
  const add3 = add2(4);
  
  console.log(add3);

  // Closure scope
var sayBye = function(name) {
    var text = "Bye, " + name;
    return function() {
      console.log(text);
    };
  };
  
  var calledMe = sayBye("Me");
  calledMe();
  

  var registrations = {
    class: "Databases",
  
    students: [
      { studentId: "001", name: "Mai ha Thi" },
      { studentId: "002", name: "Nguyen Van A" },
      { studentId: "003", name: "Mai An Thuy" },
    ],
  
    clickEnrollment: function () {
      const that = this;
      this.students.forEach(function (student) {
        console.log(student.name + " already enrolled class " + that.class);
      });
    },
  };
  
  registrations.clickEnrollment();

  // Lexical Scope
  var myFunction = function () {
    var name = "Hai";
  
    var myOtherFunction = function () {
      console.log("I am " + name);
    };
  
    console.log(name);
  
    myOtherFunction();
  };
  
  myFunction();

  // bing
  var checkNumericRange = function (value) {
    if (typeof value !== "number") 
      return false;
    else return value >= this.minimum && value <= this.maximum;
  };
  
  var range = { minimum: 10, maximum: 20 };
  var range1 = { minimum: 15, maximum: 20 };
  
  var boundCheckNumericRange = checkNumericRange.bind(range);
  
  var result = boundCheckNumericRange(12);
  
  console.log(result); 
  var result1 = boundCheckNumericRange.bind(range1)(1);
  console.log(result1); 

  // Functional inheritance
  class Square {
    constructor(width) {
      this.width = width;
    }
  
    getArea() {
      console.log("Diện tích hình vuông là " + this.width * this.width);
      return this.width * this.width;
    }
  }
  
  class Cube extends Square {
    constructor(width) {
      super(width);
    }
  
    getArea() {
      var squareArea = super.getArea(); 
      console.log("Diện tích hình vuông là " + squareArea);
      return squareArea;
    }
  
    getVolume() {
      console.log("Thể tích hình lập phương là " + this.width * this.width * this.width);
      return this.width * this.width * this.width;
    }
  }
  
  var myCube = new Cube(5);
  
  myCube.getArea();
  myCube.getVolume();
  