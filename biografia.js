document.addEventListener('DOMContentLoaded', () => {
    // Obtener el número de visitas del localStorage o inicializarlo en 0
    let visitas = parseInt(localStorage.getItem('visitas')) || 0;
    
    // Incrementar el número de visitas
    visitas++;
    
    // Guardar el nuevo número de visitas en el localStorage
    localStorage.setItem('visitas', visitas);
    
    // Mostrar el número de visitas en el elemento con id 'visitas'
    document.getElementById('visitas').textContent = visitas;
});

// Reiniciar contador de visitas
localStorage.removeItem('visitas');

// Inicializar visitas a 0
document.getElementById('visitas').textContent = 0;


// Mostrar el popup de bienvenida
const popup = document.getElementById('welcome-popup');
const closePopupBtn = document.getElementById('close-popup');
const backgroundMusic = document.getElementById('background-music');

if (popup) {
    popup.style.display = 'flex';
}

if (closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        backgroundMusic.play();
    });
}

// Botón de desplazamiento hacia arriba
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mostrar comentarios
const showCommentsBtn = document.getElementById('toggle-comments');
const comentariosList = document.getElementById('comentarios-list');

if (showCommentsBtn) {
    showCommentsBtn.addEventListener('click', () => {
        comentariosList.style.display = comentariosList.style.display === 'none' ? 'block' : 'none';
    });
}

// Agregar nuevo comentario
const comentarioForm = document.getElementById('comentario-form');
if (comentarioForm) {
    comentarioForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario-text').value;

        if (nombre && comentario) {
            const comentarioElement = document.createElement('div');
            comentarioElement.classList.add('comentario');

            comentarioElement.innerHTML = `<strong>${nombre}</strong>: <p>${comentario}</p>`;

            comentariosList.appendChild(comentarioElement);

            comentarioForm.reset();
        }
    });
}

// Cuenta regresiva
const cuentaRegresiva = document.getElementById('cuenta-regresiva');
if (cuentaRegresiva) {
    const evento = new Date('2024-07-23T00:00:00').getTime();
    const intervalo = setInterval(() => {
        const ahora = new Date().getTime();
        const distancia = evento - ahora;

        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById('contador').innerHTML = "¡Es el día!";
            return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById('contador').innerHTML = `
            <div>${dias} Días</div>
            <div>${horas} Horas</div>
            <div>${minutos} Minutos</div>
            <div>${segundos} Segundos</div>
        `;
    }, 1000);
}
