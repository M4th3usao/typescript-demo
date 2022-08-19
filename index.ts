// Import stylesheets
import './style.css';

// Write TypeScript code!

let title: string = 'My app';
let paragraph: string = 'Olá, mundo!';

let counter: number = 0;

let intervaloId = setInterval(() => {
  counter++;
  document.getElementById('app.counter')
  .innerHTML = counter.toString();
}, 1000);

document.getElementById('app.title').innerHTML = title;
