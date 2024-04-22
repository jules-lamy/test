window.addEventListener('scroll', function() {
    var logoHeader = document.getElementById('logo-header');
    var leCabinet = document.getElementById('le-cabinet');
    var scrollPosition = window.scrollY;
    var halfScreenHeight = window.innerHeight / 2;

    if (scrollPosition >= leCabinet.offsetTop - halfScreenHeight) {
        logoHeader.classList.remove('invisible');
    } else {
        logoHeader.classList.add('invisible');
    }
});



const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".menu");
const links = document.querySelectorAll(".menu a");

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-menu');
  });
});



document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const languageBtn = document.getElementById('languageBtn');
    const closeBtn = document.getElementById('close');
    
    const overlay2 = document.getElementById('overlay2');
    const mapBtn = document.getElementById('mapBtn');
    const closeBtn2 = document.getElementById('close2');

    languageBtn.onclick = function () {
        overlay.style.display = "block";
    };

    closeBtn.onclick = function () {
        overlay.style.display = "none";
    };

    mapBtn.onclick = function () {
        overlay2.style.display = "block";
    };

    closeBtn2.onclick = function () {
        overlay2.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
        if (event.target === overlay2) {
            overlay2.style.display = "none";
        }
    };
});

window.addEventListener('resize', function() {
    var buttonContent = "23 rue Pierre Fontaine<br>75009 Paris";
    var googleMapsURL = "https://maps.google.com/maps?q=23%20rue%20Pierre%20Fontaine%2C%2075009%2C%20Paris&amp;output=embed&amp;z=14";

    if (window.innerWidth <= 900) {
        var buttonElement = document.getElementById('mapBtn');
        if (buttonElement.tagName.toLowerCase() === 'button') {
            var anchorElement = document.createElement('a');
            anchorElement.href = googleMapsURL;
            anchorElement.target = "_blank";
            anchorElement.innerHTML = buttonContent;
            buttonElement.parentNode.replaceChild(anchorElement, buttonElement);
        }
    } else {
        var anchorElement = document.getElementById('mapBtn');
        if (anchorElement.tagName.toLowerCase() === 'a') {
            var buttonElement = document.createElement('button');
            buttonElement.id = 'mapBtn';
            buttonElement.className = 'categories';
            buttonElement.innerHTML = buttonContent;
            anchorElement.parentNode.replaceChild(buttonElement, anchorElement);
        }
    }
});

// Fire the event listener on page load
window.dispatchEvent(new Event('resize'));






function updateScrollButtonsVisibility() {
    const container = document.querySelector('.other-expertises');
    const leftButton = document.querySelector('.navigation-left');
    const rightButton = document.querySelector('.navigation-right');

    leftButton.hidden = container.scrollLeft === 0; // Masque le bouton de gauche si le défilement est à gauche
    rightButton.hidden = container.scrollLeft >= container.scrollWidth - container.clientWidth; // Masque le bouton de droite si le défilement est à droite ou à la fin
}


function smoothScrollTo(container, target, duration) {
    const start = container.scrollLeft;
    const distance = target - start;
    const startTime = performance.now();

    function step() {
        const currentTime = performance.now();
        const progress = Math.min((currentTime - startTime) / duration, 1);
        container.scrollLeft = start + distance * progress;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

function scrollContainerLeft() {
    const container = document.querySelector('.other-expertises');
    smoothScrollTo(container, container.scrollLeft - 1000, 800); // Ajuste la valeur pour contrôler la quantité de défilement et la durée de l'animation
}

function scrollContainerRight() {
    const container = document.querySelector('.other-expertises');
    smoothScrollTo(container, container.scrollLeft + 1000, 800); // Ajuste la valeur pour contrôler la quantité de défilement et la durée de l'animation
}

// Écouteur d'événement pour mettre à jour la visibilité des boutons lors du défilement
document.querySelector('.other-expertises').addEventListener('scroll', updateScrollButtonsVisibility);

// Appelle la fonction pour mettre à jour la visibilité des boutons au chargement de la page
updateScrollButtonsVisibility();



function updateScrollButtonsVisibility() {
    const container = document.querySelector('.other-expertises');
    const leftButton = document.querySelector('.navigation-left');
    const rightButton = document.querySelector('.navigation-right');

    if (container.scrollLeft === 0) {
        leftButton.classList.add('hidden');
    } else {
        leftButton.classList.remove('hidden');
    }

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        rightButton.classList.add('hidden');
    } else {
        rightButton.classList.remove('hidden');
    }
}

