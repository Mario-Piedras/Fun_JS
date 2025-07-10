const game = document.getElementById("game");
const player = document.getElementById("player");
const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");
const levelEl = document.getElementById("level");
const gameOverEl = document.getElementById("gameOver");
const finalScoreEl = document.getElementById("finalScore");

let score = 0;
let lives = 5;
let level = 1;
let enemiesKilled = 0;
let gameInterval;
let spawnRate = 2000;
let enemySpeed = 2;

let isGameOver = false;

// Posicionar nave con mouse
game.addEventListener("mousemove", e => {
    player.style.left = `${e.clientX - player.offsetWidth / 2}px`;
    player.style.top = `${e.clientY - player.offsetHeight / 2}px`;
});

// Disparo de láser al hacer clic
game.addEventListener("click", () => {
    if (isGameOver) return;
    const laser = document.createElement("div");
    laser.classList.add("laser");
    laser.style.left = `${player.offsetLeft + player.offsetWidth / 2 - 3}px`;
    laser.style.top = `${player.offsetTop}px`;
    game.appendChild(laser);
    moveLaser(laser);
});

function moveLaser(laser) {
    const interval = setInterval(() => {
        if (isGameOver) {
            clearInterval(interval);
            return;
        }

        laser.style.top = `${laser.offsetTop - 10}px`;

        const enemies = document.querySelectorAll(".enemy");
        enemies.forEach(enemy => {
            if (isColliding(laser, enemy)) {
                game.removeChild(enemy);
                game.removeChild(laser);
                clearInterval(interval);
                score += 10;
                enemiesKilled++;
                scoreEl.textContent = score;

                if (enemiesKilled % 100 === 0) {
                    lives = Math.min(lives + 1, 5);
                    livesEl.textContent = lives;
                }
            }
        });

        if (laser.offsetTop < 0) {
            game.removeChild(laser);
            clearInterval(interval);
        }
    }, 20);
}

function spawnEnemy() {
    if (isGameOver) return;

    const enemy = document.createElement("img");
    enemy.src = "enemy.png";
    enemy.classList.add("enemy");
    enemy.style.left = `${Math.random() * (window.innerWidth - 40)}px`;
    enemy.style.top = `-40px`;
    game.appendChild(enemy);

    moveEnemy(enemy);
}

function moveEnemy(enemy) {
    let shootInterval = setInterval(() => shootLaser(enemy), 1500);

    const interval = setInterval(() => {
        if (isGameOver) {
            clearInterval(interval);
            clearInterval(shootInterval);
            return;
        }

        enemy.style.top = `${enemy.offsetTop + enemySpeed}px`;

        if (isColliding(enemy, player)) {
            loseLife();
            game.removeChild(enemy);
            clearInterval(interval);
            clearInterval(shootInterval);
        }

        if (enemy.offsetTop > window.innerHeight) {
            game.removeChild(enemy);
            clearInterval(interval);
            clearInterval(shootInterval);
        }
    }, 30);
}

function shootLaser(enemy) {
    if (!document.body.contains(enemy)) return;

    const laser = document.createElement("div");
    laser.classList.add("enemy-laser");
    laser.style.left = `${enemy.offsetLeft + enemy.offsetWidth / 2 - 3}px`;
    laser.style.top = `${enemy.offsetTop + enemy.offsetHeight}px`;
    game.appendChild(laser);

    const interval = setInterval(() => {
        if (isGameOver) {
            clearInterval(interval);
            return;
        }

        laser.style.top = `${laser.offsetTop + 6}px`;

        if (isColliding(laser, player)) {
            game.removeChild(laser);
            clearInterval(interval);
            loseLife();
        }

        if (laser.offsetTop > window.innerHeight) {
            game.removeChild(laser);
            clearInterval(interval);
        }
    }, 20);
}

function loseLife() {
    lives--;
    livesEl.textContent = lives;
    if (lives <= 0) {
        endGame();
    }
}

function isColliding(a, b) {
    return (
        a.offsetLeft < b.offsetLeft + b.offsetWidth &&
        a.offsetLeft + a.offsetWidth > b.offsetLeft &&
        a.offsetTop < b.offsetTop + b.offsetHeight &&
        a.offsetTop + a.offsetHeight > b.offsetTop
    );
}

function endGame() {
    isGameOver = true;
    clearInterval(gameInterval);
    gameOverEl.style.display = "block";
    finalScoreEl.textContent = `Puntaje final: ${score}`;
}

// Aumentar dificultad cada minuto
setInterval(() => {
    if (isGameOver) return;
    level++;
    levelEl.textContent = level;
    spawnRate = Math.max(500, spawnRate - 200);
    enemySpeed += 0.5;
    clearInterval(gameInterval);
    gameInterval = setInterval(spawnEnemy, spawnRate);
}, 60000);

// Iniciar juego
gameInterval = setInterval(spawnEnemy, spawnRate);