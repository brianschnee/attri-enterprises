// Carousel functionality

// select the next and prev buttons from the carousel
const buttons = document.querySelectorAll('[data-carousel-button]');

// loop through buttons and add click events
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // if the button was next, set offset to 1 slide ahead in the carousel, else 1 slide behind
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button
            .closest('[data-carousel]')
            .querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');
        
        // find the new index of the slide based on the offset
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        // if the index is less than 0, loop to the end of slides
        if(newIndex < 0) newIndex = slides.children.length - 1;

        // if the index is >= to the end of the slides, start from the beginning
        if(newIndex >= slides.children.length) newIndex = 0;

        // change the active slide to the new index
        slides.children[newIndex].dataset.active = true;
        
        // delete the active class from the last slide displayed
        delete activeSlide.dataset.active;
    });
});