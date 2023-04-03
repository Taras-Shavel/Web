const testimonials = document.querySelector('.testimonial-carousel');
const testimonialItem = document.querySelectorAll('.testimonial');

let counter = 0;
const interval = setInterval(() => {
    testimonialItem[counter].classList.remove('active');
    counter++;
    if (counter === testimonialItem.length) {
        counter = 0;
    }
    testimonialItem[counter].classList.add('active');
}, 5000);


