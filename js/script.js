$(document).ready(function(){
    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });

    const bars = document.querySelectorAll(".progress__bar");
    bars.forEach(function(bar){
        let persentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = persentage + '%';
        bar.style.width = persentage + '%';
        console.log(persentage);
    });
});