let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById['app'];
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>list: ${list}</h2>
<h2>other list: ${otherList} </h2>
`;

let me: [string, number];

me = ['Jeniffer', 20];

const appDiv2: HTMLElement = document.getElementById['appTuple'];
appDiv2.innerHTML = `
<h1>Tuple</h1>
<h2>Me chamo ${me[0]} e tenho ${me[1]} anos</h2>
`;

enum Color {
  Red,
  Green,
  Blue,
}
let color1: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 20,
}
let color2: Color = ColorWithRef.Blue;

const appDiv3: HTMLElement = document.getElementById['appEnum'];
appDiv3.innerHTML = `
<h1> Enumerated types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2: ${color2}</h2>
`;

let notSure: any = 4;
notSure = 'maye I am a String';
notSure = false;

const appDiv4: HTMLElement = document.getElementById['appAny'];
appDiv4.innerHTML = `
<h1>Any VAriable</h1>
<h2>${notSure}</h2>
`;
function warnUser(): void {
  console.log('This is my warning message');
}

let myFunction: void = warnUser();

let unusable: void = undefined;
unusable = null;

myFunction;

const appDiv5: HTMLElement = document.getElementById['appVoid'];
appDiv5.innerHTML = `
<h1>Void</h1>
<h2>unusable ${unusable}</h2>
<h2>my function ${myFunction}</h2>
`;

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
//create(42) erro
//create("String") erro
//create(false) erro
create(undefined);

let someValue: any = 'this is a String';
let strLength: number = (<string>someValue).length;

let someValue2: any = 'thid is a string';
let strLength2: number = (someValue2 as string).length;

const appDiv7 = (HTMLElement = document.getElementById['appTypeAssertions']);

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

function fullName(pessoa: { name: string; lastname: string }): string {
  return pessoa.name + ' ' + pessoa.lastname;
}

const appDiv8: HTMLElement = document.getElementById['appFunction'];
appDiv8.innerHTML = `
<h1>Function</h1>
<h2> soma de 2 e 3: ${sum(2, 3)}</h2>
<h2>Soma de 11 e 329: ${sum(11, 329)}</h2>
<h2>Meu nome completo é: ${fullName({
  lastname: 'Oliveira',
  name: 'Jeniffer C.',
})}</h2>
`;

let title: string = 'Olá, mundo!';
let paragraph: string = 'BlalaBla';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = 'Countador: ' + counter;
}, 1000);

const btn = document.getElementById(app.btn);
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando com typescript');
}

const appHI: HTMLElement = document.getElementById('app.hi');
appHI.innerHTML = title;

class Greater {
  greeting: string
  constructor(message: string){
    this.greeting = message
  }
}