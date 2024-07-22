document.addEventListener('DOMContentLoaded', () => {
    // Inicializar particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Lógica para la encuesta
    const form = document.getElementById('encuesta-form');
    const resultadoDiv = document.getElementById('resultado');
    const puntuacionP = document.getElementById('puntuacion');
    const comentarioP = document.getElementById('comentario');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let correctAnswers = 0;
        const questions = form.querySelectorAll('.question');

        questions.forEach((question) => {
            const select = question.querySelector('select');
            const correctAnswer = select.getAttribute('data-correct');
            const userAnswer = select.value;

            if (userAnswer === correctAnswer) {
                correctAnswers++;
                select.style.borderColor = 'green';
            } else {
                select.style.borderColor = 'red';
            }
        });

        const totalQuestions = questions.length;
        const score = (correctAnswers / totalQuestions) * 100;
        puntuacionP.textContent = `Puntuación: ${correctAnswers} de ${totalQuestions} (${score.toFixed(2)}%)`;

        if (score === 100) {
            comentarioP.textContent = '¡Excelente! Conoces muy bien a Zelko.';
        } else if (score >= 70) {
            comentarioP.textContent = '¡Muy bien! Tienes un buen conocimiento sobre Zelko.';
        } else {
            comentarioP.textContent = 'Parece que necesitas conocer mejor a Zelko.';
        }

        resultadoDiv.style.display = 'block';
    });

    // Lógica para el pop-up de bienvenida
    const popup = document.getElementById('welcome-popup');
    const closePopup = document.getElementById('close-popup');

    if (popup && closePopup) {
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        setTimeout(() => {
            popup.style.display = 'flex';
        }, 1000); // Mostrar el pop-up después de 1 segundo
    }

    // Lógica para el contador de visitas
    const visitasBtn = document.getElementById('show-visitas');
    const visitasDisplay = document.getElementById('contador-visitas');

    if (visitasBtn && visitasDisplay) {
        visitasBtn.addEventListener('click', () => {
            visitasDisplay.style.display = 'block';
        });
    }

    // Botón de desplazamiento hacia arriba
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('encuesta-form');
    const modal = document.getElementById('result-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalScore = document.getElementById('modal-score');
    const closeModal = document.getElementById('close-modal');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let correctAnswers = 0;
        const questions = form.querySelectorAll('.question');

        questions.forEach((question) => {
            const select = question.querySelector('select');
            const correctAnswer = select.getAttribute('data-correct');
            const userAnswer = select.value;

            if (userAnswer === correctAnswer) {
                correctAnswers++;
                select.style.borderColor = 'green';
            } else {
                select.style.borderColor = 'red';
            }
        });

        const totalQuestions = questions.length;
        const score = (correctAnswers / totalQuestions) * 100;
        let message;
        let messageClass;

        if (score === 100) {
            message = '¡Lo conoces a la perfección!';
            messageClass = 'excellent';
        } else if (score >= 70) {
            message = '¡Lo conoces muy bien!';
            messageClass = 'good';
        } else if (score >= 50) {
            message = 'Todavia te falta conocerlo más.';
            messageClass = 'average';
        } else {
            message = 'Necesitas conocer más a Zelko.';
            messageClass = 'poor';
        }

        modalMessage.textContent = message;
        modalScore.textContent = `Puntuación: ${correctAnswers} de ${totalQuestions} (${score.toFixed(2)}%)`;
        modalMessage.className = `modal-message ${messageClass}`;
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
