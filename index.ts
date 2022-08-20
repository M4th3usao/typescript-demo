// Import stylesheets
import './style.css';

// Write TypeScript code!

let counter: number = 0;

let ciclo: number = 0;
let descanso: number = 0;

for (let i = 0; i <= 1; i++) {
  let intervaloId = setInterval(() => {
    descanso = descanso + i;
    document.getElementById('app.descanso').innerHTML = descanso.toString();

    if (descanso == 10) {
      descanso = 0;
    }
    if (ciclo == 8) {
      ciclo = ciclo - i;
      document.getElementById('app.ciclo').innerHTML = ciclo.toString();
    }
  }, 400);
}
/*ciclo++;
document.getElementById('app.cilo').innerHTML = ciclo.toString();*/
