const corazon = document.getElementById('corazon');
const pista = document.getElementById('pista');

corazon.addEventListener('click', () => {
    const abierto = corazon.classList.toggle('abierto');
    corazon.setAttribute('aria-pressed', abierto);
    pista.textContent = abierto ? 'Toca para cerrar' : 'Toca el corazón';
});
