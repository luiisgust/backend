let hora = 0;
let minuto = 0;
let segundo = 0;
let milissegundo = 0;

let cron;

function iniciarCronometro() {
  cron = setInterval(atualizarCronometro, 10);
}

function atualizarCronometro() {
  if ((milissegundo += 10) == 1000) {
    milissegundo = 0;
    segundo++;
  }
  if (segundo == 60) {
    segundo = 0;
    minuto++;
  }
  if (minuto == 60){
    minuto = 0;
    hora++
  }
  // Atualize os elementos HTML aqui
  document.getElementById('hora').innerText = retornarDado(hora);
  document.getElementById('minuto').innerText = retornarDado(minuto);
  document.getElementById('segundo').innerText = retornarDado(segundo);
}

function retornarDado(valor) {
  return valor < 10 ? '0' + valor : valor;
}


iniciarCronometro();