let startTime, elapsedTime = 0, timerInterval;
let running = false;

const tiempo = document.getElementById("tiempo");
const toggleBtn = document.getElementById("toggle");
const toggleIcon = document.getElementById("toggle-icon");
const capturas = document.getElementById("capturas");

function actualizarTiempo() {
    const tiempoActual = Date.now() - startTime + elapsedTime;
    const horas = Math.floor(tiempoActual / 3600000);
    const minutos = Math.floor((tiempoActual % 3600000) / 60000);
    const segundos = Math.floor((tiempoActual % 60000) / 1000);
    const milisegundos = Math.floor((tiempoActual % 1000) / 10); // 2 dígitos

    tiempo.textContent = 
    `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}.${String(milisegundos).padStart(2, '0')}`;
}

toggleBtn.onclick = () => {
    if (!running) {
    startTime = Date.now();
    timerInterval = setInterval(actualizarTiempo, 10); // Actualización cada 10 ms
    toggleIcon.classList.remove("fa-play");
    toggleIcon.classList.add("fa-pause");
    running = true;
    } else {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    toggleIcon.classList.remove("fa-pause");
    toggleIcon.classList.add("fa-play");
    running = false;
    }
};

document.getElementById("reset").onclick = () => {
    clearInterval(timerInterval);
    tiempo.textContent = "00:00:00.00";
    elapsedTime = 0;
    running = false;
    toggleIcon.classList.remove("fa-pause");
    toggleIcon.classList.add("fa-play");
    capturas.innerHTML = "";
};

document.getElementById("lap").onclick = () => {
    const lapTime = tiempo.textContent;
    const lap = document.createElement("p");
    lap.textContent = `▶ ${lapTime}`;
    capturas.appendChild(lap);
    capturas.scrollTop = capturas.scrollHeight;
};