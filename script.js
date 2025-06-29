    let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let slideInterval;

        function showSlide(index) {
            const slidesContainer = document.querySelector('.slides');
            slidesContainer.style.transform = 'translateX(' + (-index * 100) + '%)';
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 3000); // Автоматическое переключение каждые 3 секунды
        }

        document.getElementById('next').addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
        document.getElementById('prev').addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        slideInterval = setInterval(nextSlide, 3000); // Автоматическое переключение каждые 3 секунды
    