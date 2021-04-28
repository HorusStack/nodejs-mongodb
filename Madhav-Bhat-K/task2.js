const input = prompt('Enter the list of numbers');
let array = input.split(' ');
array = array.map((ele) => {
  return parseInt(ele);
});

const newArray = array.filter((ele) => ele && ele % 10 === 0);
document.getElementById('answer').innerHTML = newArray;
