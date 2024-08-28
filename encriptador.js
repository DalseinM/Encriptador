
document.getElementById('btnEncriptar').addEventListener('click', encriptarTexto);
document.getElementById('btnDesencriptar').addEventListener('click', desencriptarTexto);
document.getElementById('btnCopiar').addEventListener('click', copiarTexto);

function encriptarTexto() {
    const textoDeEntrada = document.getElementById('textoEntrada').value;
    const textoEncriptado = textoDeEntrada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    const textoDeEntrada = document.getElementById('textoEntrada').value;
    const textoDesencriptado = textoDeEntrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    const textoDeSalida = document.getElementById('textoSalida');
    textoDeSalida.value = texto;
    textoDeSalida.classList.remove('hidden');
    document.getElementById('btnCopiar').classList.remove('hidden');
}

function copiarTexto() {
    const textoDeSalida = document.getElementById('textoSalida');
    textoDeSalida.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
