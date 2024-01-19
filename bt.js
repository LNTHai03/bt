/*tên : Lê nguyễn Thanh Hải
19/01*/
// bài 1
var y = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var x = 5;
console.log(y(x-2));
switch (x) {
  
  case 2:
    console.log(y[0]); 
    break;
  case 3:
    console.log(y[1]); 
    break;
  case 4:
    console.log(y[2]);
    break;
  case 5:
    console.log(y[3]);
    break;
  case 6:
    console.log(y[4]);
    break;
  case 7:
    console.log(y[5]);
    break;
  case 8:
    console.log(y[6]);
    break;
}

//bài 2 Tim số NT
function isPrime(x) {
    var y = true;
    if (x <= 1) {
     y= false;
    }
   else{
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) {
        y = false;
                break;
      }
    }
   }
  if (y == true){
        document.write(x + " là số nguyên tố <br/>");
    }
    else{
        document.write(x + " không phải là số nguyên tố <br/>");
    }
  }
  
  console.log(isPrime(5));

//bài 3 matrix
var a = [[1, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1]];

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 3; j++) {
    document.write(a[i][j] + " ");
  }
  document.write("<br/>");
}
//bài 4
// Hàm kiểm tra username (email)
function isValidEmail(username) {
  // Sử dụng biểu thức chính quy để kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(username);
}

// Hàm kiểm tra password
function isValidPassword(password) {
  // Kiểm tra có ít nhất 1 ký tự đặc biệt
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  // Kiểm tra có ít nhất 1 chữ viết hoa
  const uppercaseRegex = /[A-Z]/;
  // Kiểm tra độ dài tối thiểu là 6 ký tự
  const minLength = 6;

  return (
    specialCharRegex.test(password) &&
    uppercaseRegex.test(password) &&
    password.length >= minLength
  );
}


















