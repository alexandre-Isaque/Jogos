// componentes
const start = document.getElementById("start");
const exit = document.getElementById("exit");
const game = document.getElementById("game");
const color = document.getElementById("color");

// canvas
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// tamanho do canvas
let HEIGHT = 600;
let WEIGHT = 600;

// velocidade do snake
let speed = 5;

// cor do snake
let snake_Color;

// tamanho do snake
let SNAKE_WEIGHT = 10;
let SNAKE_HEIGHT = 5;

// aumeta o tamanho do snake
const snakeAdd = 5;

// posição aleatoria da comida
let foodPosition = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height)
}

// posição aleatoria do snake
let snakeHead = [
    {
        x: 100, y: 100,
        x: 100, y: 100,
        x: 100, y: 100
    }
];

let snake = {
    x: Math.ceil(Math.random() * canvas.width),
    y: Math.ceil(Math.random() * canvas.height),
    size: 20
}

let snakeBody = { x: 1, y: 0};


function update(){
    color.style.display = "flex";
    color.innerHTML = "mudar de cor";

    for(let i = 0; i < 0; i++){
        snake.x = snake.x - 1;
        snake.y = snake.y - 1;
    }

    // move a cabeça
    snake.x += snakeBody.x * speed;
    snake.y += snakeBody.y * speed;

    // funçoes
    drawSnake();
    drawFood();
    collition();
    myCanvas();
    colors_snakes();
}

// inicia o jogo
start.addEventListener('click', () => {
    // intervalo
    setInterval(() => {
        update();
    }, 1000);
});

// deixa o canvas visivel
function myCanvas(){
    // configuracao basica
    canvas.style.display = "flex";
    canvas.style.height = `${HEIGHT}px`;
    canvas.style.width = `${WEIGHT}px`;
    // tira o primeiro layout
    game.style.display = "none";
}

// colisao
function collition(){
    if(snakeHead.x == foodPosition.x && snakeHead.y == foodPosition.y){
        // aumenta a altura, largura
        snake.size += snakeAdd;
        // adiciona pontos ao jogador
        ponts.innerHTML += 1;
        // aumenta a velocidade
        speed += speed;
        // muda a posicao da comida
        foodPosition.x = Math.ceil(Math.random() * canvas.width);
        foodPosition.y = Math.ceil(Math.random() * canvas.height);

        // limpa o canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    if( snake.x > canvas.width || snake.x < canvas.width ||
        snake.y < canvas.height || snake.y > canvas.height
    ){

        console.log("perdeu");
    }
}

// food == comida
function drawFood(){
    ctx.fillStyle = "red";
    ctx.fillRect(foodPosition.x, foodPosition.y, 20, 10);
}

// snake == cobra
function drawSnake(){
    ctx.fillStyle = snake_Color;
    ctx.fillRect(snake.x, snake.y, snake.size, 10);
}

// teclado
document.addEventListener('keypress', (event) => {
    if(event.key === "w" && snakeBody.y !==  1) snakeBody = { x: 0, y: -1};
    if(event.key === "s" && snakeBody.y !== -1) snakeBody = { x: 0, y: 1};
    if(event.key === "a" && snakeBody.x !== -1) snakeBody = { x: -1, y: 0};
    if(event.key === "d" && snakeBody.y !== 1) snakeBody = {x: 1, y: 0};
});

// color
function colors_snakes(){

};


