
let activo = false;
document.getElementById("btnToggle").addEventListener("click", () => {
    activo = !activo;
    document.getElementById("estadoToggle").textContent =
        activo ? "Estado: Activo" : "Estado: Inactivo";
});


let contador = 0;
document.getElementById("btnContador").addEventListener("click", () => {
    contador++;
    document.getElementById("contadorClicks").textContent =
        "Clicks: " + contador;
});


document.getElementById("inputLive").addEventListener("input", e => {
    document.getElementById("liveText").textContent =
        "Texto actual: " + e.target.value;
});


document.getElementById("themeSelect").addEventListener("change", function () {
    document.body.classList.toggle("tema-oscuro", this.value === "oscuro");
});


document.getElementById("secretBox").addEventListener("dblclick", function () {
    this.textContent = "🔓 Desbloqueado";
    this.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
    document.getElementById("secretMsg").textContent =
        "Evento doble click activado";
});


const dragItem = document.getElementById("dragItem");
const dropZone = document.getElementById("dropZone");

dragItem.addEventListener("dragstart", () => {
    document.getElementById("dragMsg").textContent =
        "Arrastrando elemento...";
});

dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.classList.add("activo");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("activo");
});

dropZone.addEventListener("drop", () => {
    dropZone.classList.remove("activo");
    dropZone.textContent = "🎉 ¡Elemento soltado!";
    document.getElementById("dragMsg").textContent =
        "Evento drop ejecutado correctamente";
});


let escala = 1;
document.getElementById("wheelBox").addEventListener("wheel", e => {
    e.preventDefault();
    escala += e.deltaY * -0.001;
    escala = Math.min(Math.max(.5, escala), 2);
    e.target.style.transform = `scale(${escala})`;
    document.getElementById("wheelMsg").textContent =
        "Zoom dinámico activado";
});


document.getElementById("scrollArea").addEventListener("scroll", () => {
    document.getElementById("scrollMsg").textContent =
        "Se detectó desplazamiento";
});
