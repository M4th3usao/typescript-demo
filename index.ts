// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log('Olá, mundo');

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
