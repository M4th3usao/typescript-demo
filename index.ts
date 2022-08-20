// Import stylesheets
import './style.css';

// Write TypeScript code!

let title: string = 'My app';
let paragraph: string = 'Olá, mundo!';

let counter: number = 0;

let descanso: number = 0;

for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    descanso++;
    document.getElementById('app.descanso').innerHTML = counter.toString();
  }
}

let intervaloId = setInterval(() => {
  counter++;
  document.getElementById('app.counter').innerHTML = counter.toString();
}, 1000);

let exercicio = setInterval(() => {
  exercicio++;
  document.getElementById('app.exercicio').innerHTML = descanso.toString();
});

document.getElementById('app.title').innerHTML = title;
