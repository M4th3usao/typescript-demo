// Import stylesheets
import './style.css';

// Write TypeScript code!

let title: string = 'My app';
let paragraph: string = 'Olá, mundo!';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1><br>
                    <p>${paragraph}</p>`;

console.log('Olá, mundo');

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
