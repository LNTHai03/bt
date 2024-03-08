
var sachs = [
    {
    tacgia: 'Harper Lee',
    tieuDe:'To Kill a Mockingbird',
    namXuatBan: 2020,
    trangthai: true
    },
    {
    tacgia:'J.K. Rowling',
    tieuDe: 'Fahrt51',
    namxuatban: 2022,
    trangthai: false
    }
]
    sachs.forEach(function(sach){
        console.log(sach.tacgia);
        console.log(sach.tieuDe);
        console.log(sach.namxuatban);
        console.log(sach.trangthai);

    },

 /* câu 2 */
    let number = [10, 5, 2, 7, 1, 9];
    let max = number[0];
    let min = number[0];
    for (let i = 1; i < number.length; i++) {
      if (number[i] > max) {
        max = number[i];
      }
      if (number[i] < min) {
        min = number[i];
      }
    }
    return [max, min];
  

  console.log(`Số lớn nhất: ${max}`);
  console.log(`Số nhỏ nhất: ${min}`);
  
       
     /* câu 3 */
    function Findkeylong(name){
        let ten name.split(' ');
        let max ten(a);
        for(let i=0; i<ten.length; i++){
           if(max < ten[i])(
            max = ten[i];
           )
           console.log(max)
    }