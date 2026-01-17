const start = document.getElementById("start");
const exit = document.getElementById("exit");
const game = document.getElementById("game");

// canvas
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// velocidade do snake
let speedSnake = 5;

// posição aleatoria da comida
let foodPosition = {
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100)
}

// posição aleatoria do snake
let snakePosition = {
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    width: 20,
}

// inicia o jogo
start.addEventListener('click', () => {
    // tirando o primeiro layout
    game.style.display = "none";

    // intervalo
    setInterval( () => {
        myCanvas();
        food();
        snake();

        requestAnimationFrame(snake);
    });
});

// deixa o canvas visivel
function myCanvas(){
    canvas.style.display = "flex";
}

// food == comida
function food(){
    ctx.fillStyle = "red";
    ctx.fillRect(foodPosition.x, foodPosition.y, 20, 10);

    // pegando a posição
    console.log("---- posição ----");
    console.log(`x: ${foodPosition.x}`);
    console.log(`y: ${foodPosition.y}`);
    console.log("----------------");
}

// snake == cobra
function snake(){
    ctx.fillStyle = "green";
    ctx.clearRect(0,0, canvas.clientHeight, canvas.clientWidth);
    ctx.fillRect(snakePosition.x, snakePosition.y, snakePosition.width, 10);

    //pegando a posição
    console.log("---- Posição ----");
    console.log(`x: ${snakePosition.x}`);
    console.log(`y:${snakePosition.y}`);
    console.log("--------------");
}

// teclado
document.addEventListener('keypress', (event) => {
    // keys
    if(event.key == 'a') snakePosition.x -= speedSnake;
    if(event.key == 's') snakePosition.y += speedSnake;
    if(event.key == 'd') snakePosition.x += speedSnake;
    if(event.key == 'w') snakePosition.y -= speedSnake;

    // desenha o snake, comida de novo
    snake();
    food();
    collition();
});

// colisão
function collition(){
    if(snakePosition.x < 0 || snakePosition.x > 280){
        // tirando o canvas
        canvas.style.display = "none";
        // adiciona o primeiro layout
        game.style.display = "flex";
    }
}
