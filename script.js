const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const overlay = document.querySelector(".overlay");
const copyBtn = document.querySelector(".copy-btn");

function btnEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    mostrarResultado(textEncriptado);
}

function btnDesencriptar() {
    const textDesencriptado = desencriptar(textArea.value);
    mostrarResultado(textDesencriptado);
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function mostrarResultado(resultado) {
    mensaje.value = resultado;

    if (resultado) {
        overlay.style.display = "none";
        copyBtn.style.display = "block";
    } else {
        overlay.style.display = "flex";
        copyBtn.style.display = "none";
    }
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    mostrarAviso("Texto copiado al portapapeles");
}

function mostrarAviso(mensaje) {
    const aviso = document.createElement("div");
    aviso.className = "aviso";
    aviso.textContent = mensaje;
    document.body.appendChild(aviso);

    setTimeout(() => {
        aviso.remove();
    }, 2000);
}
