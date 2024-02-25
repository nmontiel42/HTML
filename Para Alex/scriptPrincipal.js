function manejarBotonSi() {
    window.location.href = "si.html";
}
function manejarBotonNo() {
    event.preventDefault();
}

function manejarAceptar() {
    window.location.href = "https://glovoapp.com/es/es/";
}

function manejarVolver() {
    window.location.href = "index.html";
}

function mostrarVentanaEmergente() {
    document.getElementById('ventana-emergente').style.display = 'flex';
}

function cerrarVentanaEmergente() {
    document.getElementById('ventana-emergente').style.display = 'none';
    document.getElementById('musica').pause();  // Pausa la música
    document.getElementById('musica').currentTime = 0;  // Reinicia la posición de reproducción
}

function mostrarVentanaEmergente2() {
    document.getElementById('ventana-emergente2').style.display = 'flex';
}

function cerrarVentanaEmergente2() {
    document.getElementById('ventana-emergente2').style.display = 'none';
    document.getElementById('musica2').pause();  // Pausa la música
    document.getElementById('musica2').currentTime = 0;  // Reinicia la posición de reproducción
}