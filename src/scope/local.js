const helloWorld = () => {
    const hello = 'Hello World';
    console.log( hello );
};

helloWorld();
console.log( hello );

var scope = 'im global';
const functionScope = () => {
    var scope = 'im just a local';
    const func = () => scope;
    console.log(func());
}
console.log(scope);
functionScope();


const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {      
    const scope = "I'm local 2";
    const func3 = () => {
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();
