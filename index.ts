// Import stylesheets
import './style.css';

// Write TypeScript code!

let counter: number = 0;

let ciclo: number = 0;
let descanso: number = 8;
let exerc: number = 0;

for (let i = 0; i <= 1; i++) {
  let intervaloId = setInterval(() => {
    descanso = descanso + i;
    document.getElementById('app.descanso').innerHTML = descanso.toString();

    if (descanso == 10) {
      descanso = 0;
      ciclo++;
      if (ciclo == 8) ciclo = ciclo + 1;
    }
  }, 1000);
}

/*
let intervaloId = setInterval(() => {
  let i = 1; i <= 1; i++
  descanso = descanso + i;
  document.getElementById('app.descanso').innerHTML = descanso.toString();

  if(ciclo == 0; ciclo <= 2; ciclo++)
    if (descanso == 10) {
      descanso = 0;
    }else(exerc == 0) {
      exerc = exerc + i;
      document.getElementById('app.exerc').innerHTML = exerc.toString();
    }

  if (ciclo == 8) {
    ciclo = ciclo - 1;
    document.getElementById('app.ciclo').innerHTML = ciclo.toString();
  }

}, 1000);*/
