let passos = 0;
let moedas = 0;
const Coinsong = new Audio('songs/coin.mp3');

// Função para contar os passos e atualizar o span
function contarPassos() {
    passos++;

// Verifica se atingiu múltiplos de 1000 passos
if (passos % 1000 === 0) {
    // Incrementa o contador de moedas
    moedas += 2;
   
    // Atualiza o span das moedas
    const spanMoeda = document.getElementById('moeda');
    spanMoeda.textContent = moedas.toString();
    Coinsong.play();
}



    // Atualiza o span dos passos
    const spanPassos = document.getElementById('passos');
    spanPassos.textContent = passos.toString().padStart(2, '0');
}

// Adicione um event listener para a tecla desejada
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Oculta o elemento com ID "alerta"
    document.getElementById("alerta").style.display = "none";

    // Verifica se a tecla pressionada é uma das teclas de movimento
    if (['w', 'ArrowUp', 's', 'ArrowDown', 'a', 'ArrowLeft', 'd', 'ArrowRight'].includes(key)) {
        // Atualiza a posição e a imagem do personagem
        updateCharacter(key);

        // Chama a função para contar os passos
        contarPassos();
    }
});

// Função para atualizar a posição e a imagem do personagem
function updateCharacter(key) {
 
}
contarPassos()
function iniciarGanharMoeda() {
    setInterval(() => {
        ganharMoeda();
    }, 5 * 60 * 1000); // 5 minutos em milissegundos
}

function ganharMoeda() {
    moedas++;
    atualizarMoedas();
}

function atualizarMoedas() {
    // Atualize o span das moedas no seu HTML
    const spanMoeda = document.getElementById('moeda');
    spanMoeda.textContent = moedas.toString();
}

// Inicie o processo de ganhar moedas
iniciarGanharMoeda();