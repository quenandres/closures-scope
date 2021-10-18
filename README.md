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