$(document).ready(function(){
    $('.profile').ripples({
        resolution: 512,
        dropRadius: 10
    });

    $('.counter__section').ripples({
        resolution: 512,
        dropRadius: 10
    });

    const bars = document.querySelectorAll(".progress__bar");
    bars.forEach(function(bar){
        let persentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = persentage + '%';
        bar.style.width = persentage + '%';
    });

    //Counter

    const counters = document.querySelectorAll('.counter');
    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target / 100;
            let countIT = function() {
                let displayedCount = +counter.innerText;
                if(displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIT, 1);
                } else {
                    counter.innerText = target;
                }
            }
            countIT();
        })
    }

    let counterSection = document.querySelector('.counter__section');
    let options = {
        rootMargin : '0px 0px -200px 0px'
    }
    let done = 0;
    const sectionObserver = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && done !==1) {
            done = 1;
            runCounter();
        }
    }, options)
    sectionObserver.observe(counterSection);

    // Image Filter

    let $wrapper = $('.portfolio__wrapper')

    // Initialisation isotope

    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: '750',
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            let selector = link.dataset.filter;
            e.preventDefault();
            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: '750',
                    easing: 'linear'
                }
            });
            links.forEach(link => {
                link.classList.remove('active');
            });
            e.target.classList.add('active');
        });
    });

    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enable: true
        }
    });

    //Slider

    $('.slider').slick({
        arrows: false,
        autoplay: true
    });
});