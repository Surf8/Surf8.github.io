document.addEventListener('DOMContentLoaded', () => {
    // Card click interaction
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.background = `hsl(${Math.random() * 360}, 95%, 98%)`;
            setTimeout(() => {
                card.style.background = '#ffffff';
            }, 1000);
        });
    });

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = targetId;
            }
        });
    });

    // Image hover effect (already handled in CSS, but adding a click animation)
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.style.transform = 'scale(1.1)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 300);
        });
    });
});