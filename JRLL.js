// 1.How do we assign values to a variable? const or let a = b
// 2. how do we change the value of a variable? a = c
// 3. How do we assign an existing variable to a new variable?
// we can't change const but we can change let...  a = d
// 4.What are declare, assign and define?
// ans.. declaring a variable is the initial action because the variable doesnt exist
//ans.. assigning is giving your just made variable a value that will be used when it is logged to the console.
//ans.. defining a variable is giving it its identity so it doesnt return as undefined or give and error.
//5.What is pseudocoding? Pseudocoding is breaking down code or lines of code 
//so it is easier for developers and other individuals to understand what actions are being performed.
// 6. you have to tackle the problem and figure out solutions as you go.


let firstVariable = "Hello World"
firstVariable = 20
let secondVariable = firstVariable

secondVariable = "I'm so hungry"
//7. the value of the firstVariable is 20

console.log(secondVariable)

//8. my name variable
let yourName = 'Dolapo Olomo'
console.log('Hello, my name is '   +   yourName)

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b)
console.log(c > d);
console.log('name' === 'name')
console.log(false === false ===false ===false === false !== true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a === a && a < d);
console.log(48 !== '48')


let animal = 'monkey'
if (animal === 'monkey') {
    console.log('eahhehh');
} else {
    console.log('you are not a monkey');
}

let personAge = 21;
if (personAge >= 16) {
    console.log('Here are the keys!');
} else {
    console.log("Sorry you're too young.")
}


for ( let i = 0; i <= 10; i++) {
    console.log(i)
};

for (let p = 10; p <= 400; p++) {
    console.log(p)
}
 for (let d = 12; d<=400; d+=3) {
    console.log(d)
 }

 for( let a = 2; a <= 100; a+=2) {
    console.log(a  + ' <-- is an even number')
 }

 for (let f = 5; f<= 100; f+= 5) {
    console.log('I found a ' + f + ' high five!')
 }
 for (let t= 1; t<=100; t++) {
    if(0 === t % 5 && t %3 === 0) {
        console.log('I found a ' + t + ' High five!')
        console.log('I found a ' + t + ' Three is a crowd')
    } else if (t % 5 === 0) {
        console.log('I found a ' + t + ' High five!')
    } else if (t % 3 === 0) {
        console.log('I found a ' + t + ' Three is a crowd')
    }
 }

 let bank_account = 0;
 for (let b = 1; b <= 10; b++) {
    bank_account += b;
 };
 console.log(bank_account);
 bank_account = 0;
 for (let b = 1; b <= 101; b++) {
    bank_account += b * 2;
 };
 console.log(bank_account);

 //What are the things in an array called? An element
 //Do arrays guarantee does things will be ordered? No
 //What real-life things could you model with an array? A list of your favorite foods.

 const quotes = ['I can do anything', "I'm hungry", "I'm pretty"]

 let randomThings = [1, 10, "Hello", true];
randomThings[0];
console.log(randomThings)
randomThings[2] = 'World'
console.log(randomThings)

const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github'];
console.log(ourClass[2])

ourClass[4] = 'Octocat'
ourClass.push('Cloud City')
console.log(ourClass)

const myArray = [5, 10, 500, 20];
myArray.push('Aegon')
myArray.shift()
myArray.unshift('Bob Marley')
myArray.pop()

console.log(myArray);
myArray.reverse()
console.log(myArray)


let numberEntered = 0;

if (numberEntered < 100) {
    console.log('little number')
} else {
    console.log('big number')
}

numberEntered = 104;


let monkeyNumber = 3;
if(monkeyNumber < 5) {
    console.log('little number')
} else if ( monkeyNumber > 10) {
    console.log('big number');
} else {
    console.log('monkey');
}
monkeyNumber = 17;

console.log(monkeyNumber)

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log('Kristyn is rocking that ' + kristynsCloset[2]+ ' today!')
  const kristynShoe = kristynsCloset.shift();
  kristynsCloset.splice(5, 0, 'raybans');
  kristynsCloset[4] = 'stained knit hat';
  thomsCloset[0][0];
  thomsCloset[1][1];
  thomsCloset[2][1];
  console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ',' + thomsCloset[1][1] + ' and ' + thomsCloset[2][1] + ' ! ');
  thomsCloset[1][2] = 'Footie Pajamas';