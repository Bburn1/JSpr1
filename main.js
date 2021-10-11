
const firstRow = prompt('Введите первую строку');
const secondRow = prompt('Введите вторую строку');
const Letter = prompt('Введите букву которую нужно посчитать и сравнить');
console.log(firstRow, '-- Первая строка');
console.log(secondRow, '-- Вторая строка');
console.log(getRow(secondRow, firstRow));
var retry = true;


function getRow(firstRow, secondRow)
{
let count_first=0;
let count_second=0;
for(let i=0; i<firstRow.length; i++) {
  if (firstRow.charAt(i) == Letter) {
    count_first++;
  }
}
for(let i=0; i<secondRow.length; i++) {
  if (secondRow.charAt(i) == Letter) {
    count_second++;
  }
}
if (count_first >= count_second){
console.log(firstRow, ' :-в этой строке больше букв - ', Letter);
  return count_first;
}
else{
console.log(secondRow, ' :- в этой строке больше букв - ', Letter);
  return count_second;
}
}


function formattedPhonenumber() { 
  alert("Задание 2");
  var phonenumber = prompt("Введите номер телефона: "); 
  var lenPhonenumber = phonenumber.length;
  if (lenPhonenumber == 12){
      var num=phonenumber.split('');
      if (num[1] != 7) num[1] = 7; 
      num.splice(2,"", " ("); 
      num.splice(6,"", ") "); 
      num.splice(10,"", "-"); 
      num.splice(13,"", "-"); 
  }
  else if (lenPhonenumber == 11)
  {
      var num=phonenumber.split('');
      if (num[0] != 7) num[0] = 7;
      num.splice(0,"","+") 
      num.splice(2,"", " ("); 
      num.splice(6,"", ") "); 
      num.splice(10,"", "-"); 
      num.splice(13,"", "-"); 
  }
  else if (lenPhonenumber == 10)
  {
      var num=phonenumber.split('');
      num.splice(0,"",7) 
      num.splice(0,"","+") 
      num.splice(2,"", " ("); 
      num.splice(6,"", ") "); 
      num.splice(10,"", "-"); 
      num.splice(13,"", "-"); 
  }
  else {alert("Вы ввели неправильный формат номера!")}
  alert(num.join(''))
  var ret = prompt("Повторить? (y/n)");
  if (ret=="y") {
      retry = true;
  }
  else{retry = false;}
  } 
while (true){
  if (retry == true) console.log(formattedPhonenumber());
  else break;
}
