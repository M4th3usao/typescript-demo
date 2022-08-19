// Import stylesheets
import './style.css';

// Write TypeScript code!

let title: string = 'My app';
let paragraph: string = 'Olá, mundo!';

let counter: number = 0;

let intervaloId = setInterval(() => {
  counter++;
  document.getElementById('app.counter').innerHTML = counter.toString();
}, 1000);

let descanso = setInterval(() => {
  descanso++;
  document.getElementById('app.descanso').innerHTML = descanso.toString();
}, 500);

let exercicio = setInterval(() => {
  exercicio++;
  document.getElementById('app.exercicio').innerHTML = descanso.toString();
}, 500);

document.getElementById('app.title').innerHTML = title;
