let currentSlideIndex = 0;

function openModal(index) {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function showSlide(index) {
    const slides = document.querySelectorAll('.modal-slide');
    const textOverlay = document.getElementById('text-overlay');

    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'flex' : 'none';
    });

    // Check if the current slide is the last one
    if (currentSlideIndex === slides.length - 1) {
        textOverlay.style.display = 'flex';
    } else {
        textOverlay.style.display = 'none';
    }
}

function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
});
