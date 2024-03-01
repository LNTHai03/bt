<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Even or Odd Checker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        #result {
            margin-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Even or Odd Checker</h1>
    <input type="number" id="numberInput" placeholder="Enter a number">
    <button onclick="checkNumber()">Check</button>
    <p id="result"></p>

    <script>
        function checkNumber() {
            const inputNumber = document.getElementById('numberInput').value;
            const result = check(inputNumber);
            let message = '';

            if (result) {
                message = ' is even.';
            } else {
                message = ' is odd.';
            }

            document.getElementById('result').innerText = inputNumber + message;
        }

        // Your check function
        const check = (a) => a % 2 === 0;
    </script>
</body>
</html> -->


var sachs = 
    {
    tacgia: 'Harper Lee',
    tieuDe:'To Kill a Mockingbird',
    namXuatBan: 2020,
    trangthai: true
    }
    {
    tacgia:'Ray Bradbury',
    tieuDe: 'Fahrenheit 451',
    namxuatban: 2022,
    trangthai: false
    }

    sachs.forEach(function(sach){
        console.log(sach.tacgia);
        console.log(sach.tieuDe);
        console.log(sach.namxuatban);
        console.log(sach.trangthai);

    }

    <!-- câu 2 -->
    function findMinMax(arr) {
        // Khởi tạo giá trị lớn nhất và nhỏ nhất ban đầu
        let max = arr[0];
        let min = arr[0];
      
        // Duyệt qua từng phần tử trong mảng
        for (let i = 1; i < arr.length; i++) {
          // Cập nhật giá trị lớn nhất nếu tìm thấy phần tử lớn hơn
          if (arr[i] > max) {
            max = arr[i];
          }
      
          // Cập nhật giá trị nhỏ nhất nếu tìm thấy phần tử nhỏ hơn
          if (arr[i] < min) {
            min = arr[i];
          }
        }
      
        // Trả về mảng chứa số lớn nhất và nhỏ nhất
        return [max, min];
      }
      
      // Ví dụ sử dụng
      const arr = [10, 5, 2, 7, 1, 9];
      const [max, min] = findMinMax(arr);
      
      const max = Math.max(...arr);
      const min = Math.min(...arr);
      
    