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
});