let nextButton = document.getElementById('Next');
let PreviousButton = document.getElementById('Previous');
let crouselContainer = document.querySelector('.crousel');
let listItemContainer = document.querySelector('.crousel .list');
let CardImageContainer = document.querySelector('.crousel .ImageCard');

nextButton.onclick = function(){
    showSlider('Next');
}

PreviousButton.onclick = function(){
    showSlider('Previous');
}


let progressBarTime = 3000;
let AutoSlideNext = 5000;
let runTimeOut;

let SlideAutoNext = setTimeout(() => {
    nextButton.click();
}, AutoSlideNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.crousel .list .item');
    let ItemImageCard = document.querySelectorAll('.crousel .ImageCard .item');

    if (type === 'Next'){
        listItemContainer.appendChild(itemSlider[0]);
        CardImageContainer.appendChild(ItemImageCard[0]);
        crouselContainer.classList.add('nextSlide')
    } else{
        let LastItemPosition = itemSlider.length - 1;
        listItemContainer.prepend(itemSlider[LastItemPosition]);
        CardImageContainer.prepend(ItemImageCard[LastItemPosition]);
        crouselContainer.classList.add('previousSlide')
    }

    clearTimeout(runTimeOut);
    runTimeOut= setTimeout(()=>{
        crouselContainer.classList.remove('nextSlide');
        crouselContainer.classList.remove('previousSlide');
    }, progressBarTime)

    clearTimeout(SlideAutoNext);
    SlideAutoNext = setTimeout(() => {
        nextButton.click();
    }, AutoSlideNext)
}