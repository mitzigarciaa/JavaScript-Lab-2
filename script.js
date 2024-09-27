
let number = -4; 

if (number > 0) {
    console.log('number is positive');
} else if (number < 0) {
    console.log('number is negative');
} else {
    console.log('The number is zero');
}



var day = '3'; 

switch (day) {
    case '1':
        console.log('Sunday');
        break;
    case '2':
        console.log('Monday');
        break;
    case '3':
        console.log('Tuesday');
        break;
    case '4':
        console.log('Wednesday');
        break;
    case '5':
        console.log('Thursday');
        break;
    case '6':
        console.log('Friday');
        break;
    case '7':
        console.log('Saturday');
        break;
    default:
        console.log('Please enter a number between 1 and 7');
}



for (let i = 1; i <= 5; i++) {
    console.log(i);
}


let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

for (let i = 1; i <= 5; i++) {
if (i === 3) {
    break; 
}
console.log(i);
}


for (let i = 1; i < 5; i++) {
if (i === 3) {
    continue; 
}
console.log(i);
}



let globalVar = "I'm global!"; 

function scopeExample(globalVar) {
    let localVar = "I'm local!"; 
    console.log(globalVar); 
    console.log(localVar);   
}

console.log(globalVar); 

  