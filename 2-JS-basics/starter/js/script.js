/**
 * CODING CHALLENGE 1
 */

 /*

 var massMarK = prompt('What is the mass of Mark?');
var heightMarK = prompt('What is the height of Mark?');
var massJohn = prompt('What is the mass of John?');
var heightJohn = prompt('What is the height of John?');
 
console.log(massMarK);
console.log(heightMarK);
console.log(massJohn);
console.log(heightJohn);

 var resMark = this.calculateIBM(massMarK, heightMarK);
 var resJohn = this.calculateIBM(massJohn, heightJohn);

 var isMarkHigher = resMark > resJohn ? true : false;
 var isJohnHigher = resMark < resJohn ? true : false;

 if(isMarkHigher){
     console.log("Is Mark's BMI higher than John's? "+isMarkHigher);
 }else if(isJohnHigher){
    console.log("Is John's BMI higher than Mark's? "+isJohnHigher);
 }

 function calculateIBM(mass, height){
    var ibm = mass / (height * height);
    console.log(ibm);
    return ibm;
 }

 */

 /**
 * CODING CHALLENGE 2
 */

 /*

var John = [130, 120, 103];
var Mike = [116, 94, 123];
var Mary = [97, 134, 105];

const obj = [
   { id: 1, name: 'asdf', total: 10},
   { id: 2, name: 'asdf', total: 20},
   { id: 3, name: 'asdf', total: 30}
];

function average(object){
   var average = object.reduce(
      (acc, currentValue) => {
         return acc + currentValue.total;
      },
      0
   );

   return average/object.length;
}

console.log(average(obj));
*/

/**
 * CODING CHALLENGE 3
 */
/*
const bills = [124, 48, 268];

const tips = new Array();

const total = new Array();

function calculateTips(bill){
   var tip;
   if(bill<50){
      tip = 0.2;
   }else if(bill >= 50 && bill < 200){
      tip = 0.15;
   }else if(bill>=200){
      tip = 0.1;
   }

   return bill * tip;
}

function calculateTotal(bill,tip){
   return bill + tip;
}

bills.forEach(bill => {
   tips.push(calculateTips(bill));
});


console.log('Cuentas : '    + bills);
console.log('Propinas: '   + tips);

console.log('Total   : '      + total);
*/

/**
 * CODING CHALLENGE 4
 */
/*
var John = {
   fullName: 'John X',
   mass: 70,
   height: 1.70
};

var Mark = {
   fullName: 'Mark00 X',
   mass: 100,
   height: 1.80
};

function calculateIBM(mass, height){
   var ibm = mass / (height * height);
   console.log(ibm);
   return ibm;
}

console.log(calculateIBM(Mark.mass, Mark.height));
*/

/**
 * CODING CHALLENGE 5
 */















