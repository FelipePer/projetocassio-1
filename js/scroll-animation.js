
const scrollAnima = document.querySelectorAll('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 5.2;

function animarScroll() {

    const topoItem = scrollAnima.getBroundingClientReact().top;

    const itemVisivel = topoItem - metadeWindow < 0;

    if(itemVisivel) {
        scrollAnima.classList.add('show-button');
    } else{
        scrollAnima.classList.remove('show-button');
    };

    console.log(topoItem)

};


window.addEventListener('scroll', animarScroll);



























