
// Q1 biggest number
let numb1=parseInt(prompt("Enter first number "));
console.log(numb1);
let numb2=parseInt(prompt("Enter second number "));
console.log(numb2);
let numb3=parseInt(prompt("Enter third number "));
console.log(numb3);

if(numb1>numb2){
    if(numb1>numb3){
        console.log(`first number= ${numb1} is the biggest number `);
    }else{
        console.log(`third number= ${numb3} is the biggest number `);
    }
}else if(numb2>numb1){
    if(numb2>numb3){
        console.log(`second number= ${numb2} is the biggest number `);
    }else{
        console.log(`third number =${numb3} is the biggest number `);
    }
}

// ----------------------------------------------------------------------
// Q2 name of month
let month=parseInt(prompt("Enter number of month"));
console.log(month)
switch (month){
    case 1:
        console.log("January");
        break;
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Enter number 1:12");
        
}

// --------------------------------------------------------------------
// Q3 check even or odd
let num=parseInt(prompt("Enter number to check Even or Odd"));
if(isNaN(num)){
    console.log("please Enter a number");
}else if(num%2==0){
    console.log(`Number ${num} is Even`);
}else{
    console.log(`Number ${num} is Odd`);
}

// -----------------------------------------------------------------------
// Q4 Factorial number
let number= parseInt(prompt("Enter a number to calc factorial"));

let fac=1;
for(let i =1;i<=number;i++){
    fac*=i;
}
console.log(`factorial numer for ${number} = ${fac}`);


// -----------------------------------------------------------------------
// Q5 simple calc
let num1=parseInt(prompt("Enter first number "));
let oper=prompt("Enter Operator")
let num2=parseInt(prompt("Enter second number "));

if(oper ==="+"){
    console.log(`${num1} ${oper} ${num2} = ${num1+num2}`);
}else if(oper ==="-"){
    console.log(`${num1} ${oper} ${num2} = ${num1-num2}`);
}else if(oper ==="*"||oper ==="x"){
    console.log(`${num1} ${oper} ${num2} = ${num1*num2}`);
}else if(oper ==="/"){
    if(num2!==0){
    console.log(`${num1} ${oper} ${num2} = ${num1/num2}`);
    }else{
        console.log("MATH ERROR");
    }
}


// -----------------------------------------------------------------------
// Q6
let sum=0
for(let i = 0 ; sum<100; i++){
    let input=parseInt(prompt("enter number"));
    console.log(input);
    sum+=input
    if(input == 0){
        break;
    }
}
console.log(`sum = ${sum}`);