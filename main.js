
const firstRow = prompt('Введите первую строку');
const secondRow = prompt('Введите вторую строку');
const Letter = prompt('Введите букву которую нужно посчитать и сравнить');
console.log(firstRow, '-- Первая строка');
console.log(secondRow, '-- Вторая строка');
console.log(getRow(secondRow, firstRow));
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

