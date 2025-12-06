// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        const closeMenu = () => {
            mobileMenu.classList.add('opacity-0', '-translate-y-4', 'invisible');
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
        };

        const openMenu = () => {
            mobileMenu.classList.remove('opacity-0', '-translate-y-4', 'invisible');
            mobileMenu.classList.add('opacity-100', 'translate-y-0');
        };

        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            if (mobileMenu.classList.contains('opacity-0')) {
                openMenu();
            } else {
                closeMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.classList.contains('opacity-0') && !mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu on scroll
        window.addEventListener('scroll', () => {
            if (!mobileMenu.classList.contains('opacity-0')) {
                closeMenu();
            }
        });
    }
});
