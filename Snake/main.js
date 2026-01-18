// componentes
const start = document.getElementById("start");
const exit = document.getElementById("exit");
const game = document.getElementById("game");
const ponts = document.getElementById("pontos");

// canvas
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// tamanho do canvas
const HEIGHT = 600;
const WEIGHT = 600;

// velocidade do snake
let speed = 1;

// tamanho do snake
let SNAKE_WEIGHT = 10;
let SNAKE_HEIGHT = 5;

// pontos
let point = 0;
ponts.innerHTML = point;

// aumeta o tamanho do snake
const snakeAdd = 10;

// posição aleatoria da comida
let foodPosition = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height)
}

// posição aleatoria do snake
let snakePosition = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height)
}

// inicia o jogo
function startGame(){
    start.addEventListener('click', () => {
        // intervalo
        setInterval(() => {
            food();
            collition();
            myCanvas();
        }, 100);
    });
}

// deixa o canvas visivel
function myCanvas(){
    // configuracao basica
    canvas.style.display = "flex";
    canvas.style.height = `${HEIGHT}px`;
    canvas.style.width = `${WEIGHT}px`;
    // adiciona pontuacao
    ponts.style.display = "flex";

    // tira o primeiro layout
    game.style.display = "none";
}

// colisao
function collition(){

    if( snakePosition.x < canvas.width ||
        snakePosition.x > canvas.width ||
        snakePosition.y < canvas.height ||
        snakePosition.y > canvas.height )
    {
        // remove o canvas
        canvas.style.display = "none";
        canvas.style.height = "0px";
        canvas.style.width = "0px";

        // volta ao primeiro layout
        game.style.display = "flex";

    }

    if(snakePosition.x == foodPosition.x && snakePosition.y == foodPosition.y){
        // aumenta a altura, largura
        SNAKE_WEIGHT += snakeAdd;
        // adiciona pontos ao jogador
        ponts.innerHTML += 1;
        // aumenta a velocidade
        speed += 1;
        // muda a posicao da comida
        foodPosition.x = Math.ceil(Math.random() * canvas.width);
        foodPosition.y = Math.ceil(Math.random() * canvas.height);
    }
}

// food == comida
function food(){
    ctx.fillStyle = "red";
    ctx.fillRect(foodPosition.x, foodPosition.y, 10, 5);
}

// snake == cobra
function snake(){
    ctx.fillStyle = "green";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(snakePosition.x, snakePosition.y, SNAKE_WEIGHT, SNAKE_HEIGHT);
}

// teclado
document.addEventListener('keypress', (event) => {
    // keys
    if(event.key == 'a') snakePosition.x -= speed;
    if(event.key == 's') snakePosition.y += speed;
    if(event.key == 'd') snakePosition.x += speed;
    if(event.key == 'w') snakePosition.y -= speed;

    // desenha o snake, comida de novo
    snake();
    food();
});

// executa o jogo
startGame();
