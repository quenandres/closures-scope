// Ejemplo de scope global
var hello = 'Hello'; // Podemos acceder a esa variable en cualquier parte de este archivo por que esta global
var hello = 'Hello +';
let world = 'Hello World';
const helloWorld = 'Hello World !';

const anotherFunction = () => {

    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// Mala practica
const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'im Global';
}

anotherFunction();
console.log(globalVar);