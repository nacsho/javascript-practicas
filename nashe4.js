let num1 = parseInt(prompt("Introduzca el valor 1",0));
let num2 = parseInt(prompt("Introduzca el valor 2",0));
let resultado;

console.log("Suma "+(num1+num2));
console.log("Resta "+(num1-num2));
console.log("Multiplicación "+(num1*num2));
console.log("División "+(num1/num2));

if(num1 % 2 === 0){
    console.log(`el primer numero ${num1} es par`)
}else{
    console.log(`el primer numero ${num1} es impar`)
}

if(num2 % 2 === 0){
    console.log(`el segundo numero ${num2} es par`)
}else{
    console.log(`el segundo numero ${num2} es impar`)
}

