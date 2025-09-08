const number = [1, 2, 3, 4, 5];

let text = '';
for (let x in number) {
  text += number[x] + '<br>';
}

document.getElementById('demo').innerHTML = text;