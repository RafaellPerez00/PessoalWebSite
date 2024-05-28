//Acessaar a Janela (Browser)
//Pegar o HTML TODO
//Ter o botao
//Click no botão

const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;
const minLimit = -150;
const maxLimit = 0;

btnRight.addEventListener('click', function () {
    if(pixels > minLimit){
        pixels -= 50;
        elements.style=`transform: translateX(${pixels}%)`;
        console.log('Foi clicado para esquerda') 
    }else{
        console.log('Limite máximo atingido')
    } 
});

btnLeft.addEventListener('click', function () {
    if(pixels < maxLimit){
        pixels += 50;
        elements.style=`transform: translateX(${pixels}%)`;
        console.log('Foi clicado para direita')
    }else{
        console.log('Limite mínimo atingido');
    }
});
    
