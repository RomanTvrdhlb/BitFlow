const cards = document.querySelectorAll('.card');

cards && cards.forEach(function(card){

    const speed = card.querySelector('[data-speed]');
    const plusBtn = card.querySelector('.card__btn--plus');
    const minusBtn = card.querySelector('.card__btn--minus');
    const refreshBtn = card.querySelector('.card__btn--refresh');
    const value = card.querySelector('.card__speed-value');
    const arrow = card.querySelector('.card__arrow');
    let count = +speed.dataset.speed;
    let rotation = (+speed.dataset.speed / 5) * 18;

    value.innerText = `${count}%`;
    arrow.style.transform = `rotate(${rotation}deg)`;
    
    plusBtn.addEventListener('click', function(e){
        e.preventDefault();

        count += 5;
        rotation += 18;
        if (count > 100) {
            count = 100;
            rotation = 360;
        }
        speed.dataset.speed = count;
        value.innerText = `${count}%`;
        arrow.style.transform = `rotate(${rotation}deg)`;
    })

    minusBtn.addEventListener('click', function(e){
        e.preventDefault();
        count -= 5;
        rotation -= 18;

        if (count < 0) {
            count = 0;
            rotation = 0;
        }
        speed.dataset.speed = count;
        value.innerText = `${count}%`
        arrow.style.transform = `rotate(${rotation}deg)`;
      
    })

    refreshBtn.addEventListener('click', function(e){
        e.preventDefault();
        count = 0;
        speed.dataset.speed = count;
        value.innerText = `${count}%`
        rotation = 0;
        arrow.style.transform = `rotate(${rotation}deg)`;
    })

   
    // function rotateArrow() {
    //     const rotation = Math.floor(360 / (100 / 5)); // Количество полных оборотов
      
    // }
})