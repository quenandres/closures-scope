# Curso de Closures y scope

### Que es el scope
Es el alcance que se encarga de decidir a que bloques de codigo accederan las variables.
 - scope global
 - scope local

Ambito lexico, al ejecutarse js, busca desde el menor bloque al mayor, la variable a ejecutar.

```
const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      const scope = "I'm local 3";
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();
```
Esto nos mostrara el string "I'm local 3"

Usar let y const para asegurarnos de nos reescribir variables con var

### Ambitos
* var: Ambito de funcion
* let y const: Ambito de bloque

```
const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi'
        console.log(fruits2);
        console.log(fruits3);
    } 
    console.log(fruits1);
}

fruits();
```

### Que es un closure
- Es la combinacion de una funcion y el ambito lexico en la cual fue declarada dicha funcion, un closure recuerda el ambito en el que fue creado.

## Ambito lexico
- El ambito lexico son funciones que se ejecutan ulizando
la cadena del alcance donde estaba vigente en en su momento
es decir que se tiene el valor de count que esta declarado en la funcion principal
pero esta accequible dentro de la funcion,

### closure en Loops
En un loop nunca ocupes var, siempre utiliza let para valores que irán cambiando dentro de la ejecución del scope.

### hoisting
Cuando es compilado, el moto poner las declaraciones de las variables antes de la ejecución esto unicamente en las declaraciones y no en las inicializaciones