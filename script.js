document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Sticky & Shadow on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            navbar.classList.toggle('mobile-active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navbar.classList.remove('mobile-active');
            });
        });
    }

    // 3. Simple Typewriter Effect for Hero Subtitle
    const typeTarget = document.querySelector('.hero-subtitle span');
    if (typeTarget) {
        const words = ['Software Engineer', 'AI Enthusiast', 'Game Developer', 'Tech Leader'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let delay = 150;

        function typeEffect() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typeTarget.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                delay = 75; // Faster deletion
            } else {
                typeTarget.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                delay = 150; // Typing speed
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                delay = 1500; // Pause at full word
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 500; // Pause before starting next word
            }

            setTimeout(typeEffect, delay);
        }

        // Start typewriter
        setTimeout(typeEffect, 1000);
    }

    // 4. Scroll Spy - Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function scrollSpy() {
        const scrollY = window.scrollY;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollSpy);

    // 5. Scroll Entrance Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        revealElements.forEach(el => el.classList.add('active'));
    }

    // 6. Contact Form Validation & Submission
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm && formAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear alert states
            formAlert.style.display = 'none';
            formAlert.className = 'form-alert';

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            // Client-side validations
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !message) {
                showFormAlert('Please fill in all fields.', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showFormAlert('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate sending API request
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="glow-text">Sending message...</span>';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;

                // Reset inputs
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';

                showFormAlert('Your message has been sent successfully! I will get back to you soon.', 'success');
            }, 1800);
        });
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function showFormAlert(msg, type) {
        formAlert.textContent = msg;
        formAlert.classList.add(type);
        formAlert.style.display = 'block';

        // Auto scroll slightly to see message if needed
        formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // 7. Light/Dark Theme Switcher
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        const updateThemeIcon = (isLight) => {
            const icon = themeToggleBtn.querySelector('i');
            if (icon) {
                if (isLight) {
                    icon.className = 'fa-solid fa-sun';
                } else {
                    icon.className = 'fa-solid fa-moon';
                }
            }
        };

        const isCurrentLight = document.documentElement.classList.contains('light-theme');
        updateThemeIcon(isCurrentLight);

        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.documentElement.classList.toggle('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            updateThemeIcon(isLight);
        });
    }

    // 8. Achievements Gallery Lightbox Modal
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentGalleryImages = [];
    let currentImageIndex = 0;

    if (lightboxModal && lightboxImg) {
        const thumbWrappers = document.querySelectorAll('.achievement-thumb-wrapper');
        
        thumbWrappers.forEach((wrapper) => {
            wrapper.addEventListener('click', (e) => {
                const card = wrapper.closest('.achievement-card');
                if (!card) return;
                
                const allCardWrappers = card.querySelectorAll('.achievement-thumb-wrapper');
                currentGalleryImages = Array.from(allCardWrappers).map(w => {
                    const img = w.querySelector('img');
                    return {
                        src: img.getAttribute('src'),
                        alt: img.getAttribute('alt') || 'Achievement Photo'
                    };
                });
                
                const clickedImg = wrapper.querySelector('img');
                const clickedSrc = clickedImg.getAttribute('src');
                currentImageIndex = currentGalleryImages.findIndex(img => img.src === clickedSrc);
                if (currentImageIndex === -1) currentImageIndex = 0;
                
                openLightbox();
            });
        });

        function openLightbox() {
            updateLightboxContent();
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function updateLightboxContent() {
            if (currentGalleryImages.length === 0) return;
            const imgData = currentGalleryImages[currentImageIndex];
            lightboxImg.src = imgData.src;
            lightboxImg.alt = imgData.alt;
            lightboxCaption.textContent = imgData.alt;
        }

        function prevImage() {
            if (currentGalleryImages.length <= 1) return;
            currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
            updateLightboxContent();
        }

        function nextImage() {
            if (currentGalleryImages.length <= 1) return;
            currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
            updateLightboxContent();
        }

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', prevImage);
        lightboxNext.addEventListener('click', nextImage);

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal || e.target.classList.contains('lightbox-container') || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (!lightboxModal.classList.contains('active')) return;
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        });
    }

    // 9. Profile Image (no processing needed - using original image as-is)
});

