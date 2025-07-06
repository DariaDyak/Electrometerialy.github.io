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


        document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100 &&
            rect.bottom >= 0
        );
    }
    
    // Функция для обработки появления элементов
    function handleScroll() {
        // Анимация всех заголовков h4
        const titles = document.querySelectorAll('h4');
        titles.forEach(title => {
            if(isElementInViewport(title)) {
                title.classList.add('show');
            }
        });
        
        // Анимация элементов preim-item
        const items = document.querySelectorAll('.preim-item');
        items.forEach((item, index) => {
            if(isElementInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 250);
            }
        });
    }
    
    // Обработчик скролла
    window.addEventListener('scroll', handleScroll);
    
    // Проверить при загрузке страницы
    handleScroll();
});
fetch('https://api.yandex.ru/reviews/get')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.ratings-count').textContent = data.total_ratings + ' оценок';
    document.querySelector('.rating-value').textContent = data.average_rating;
  });
   document.addEventListener('DOMContentLoaded', function() {
    // Клонируем содержимое для бесшовной анимации
    const marqueeContent = document.querySelector('.marquee-content');
    marqueeContent.innerHTML += marqueeContent.innerHTML;
});
            
            elementsToFullWidth.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el.style.width = '100%';
                    el.style.maxWidth = '100%';
                });
            });
            
            // Анимация для заголовков
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            }, {threshold: 0.1});
            
            document.querySelectorAll('h4').forEach(h4 => {
                observer.observe(h4);
            });
            window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.transform = 'translateY(0)';
    } else {
        header.style.transform = 'translateY(-100%)';
    }
});
