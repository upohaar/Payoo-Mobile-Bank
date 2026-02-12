const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";


for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

while (i < 10) {
  text += "The number is " + i;
  i++;
}


do {
  text += "The number is " + i;
  i++;
}
while (i < 10);


do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let j = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let k = 0;
let textt = "";

while (cars[i]) {
  text += cars[i];
  i++;
}


let y = 15, x = '';
do {
  x += 'The number is ' + i;
}
while (i < 10);