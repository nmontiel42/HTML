function mostrarVentanaEmergente() {
    document.getElementById('ventana-emergente').style.display = 'flex';
}

function cerrarVentanaEmergente() {
    document.getElementById('ventana-emergente').style.display = 'none';
    document.getElementById('musica').pause();
    document.getElementById('musica').currentTime = 0;
}