let elementoButton = document.querySelector('#alterar')
const elementoImg = document.querySelector('#imagem')
const elementoNome = document.querySelector('#nomeNegrito')
let elementoDesc = document.querySelector('#descricao')
let nomeButton = document.querySelector('button')
let cont = 1

elementoButton.addEventListener('click', () =>{

    if(cont == 1){
        
        elementoImg.src = "./img/alegria.png"
        elementoNome.innerText = " Alegria "
        elementoDesc.innerText = "Ah, a alegria, sem ela o que seria de nós?! Mantém a positividade em quase todas as situações..."
        nomeButton.innerText = "Mude o astral!"
        cont += 1
        
    } else if(cont == 2){

        elementoImg.src = "./img/medo.png"
        elementoNome.innerText = " Medo "
        elementoDesc.innerText = "Sempre com um pé atrás, o medo te faz estar sempre em estado de alerta! "
        nomeButton.innerText = "Mude o astral"
        cont += 1

    } else if(cont == 3){

        elementoImg.src = "./img/nojinho.png"
        elementoNome.innerText = " Nojinho "
        elementoDesc.innerText = " ECA!!! Esse mood te faz ter nojinho de tudo"
        nomeButton.innerText = "Mude o astral"
        cont += 1
    
    }
    else if(cont == 4){

        elementoImg.src = "./img/raiva.png"
        elementoNome.innerText = " Raiva "
        elementoDesc.innerText = "Em momentos de tensão e estresse, te faz explodir!"
        nomeButton.innerText = "Mude o astral"
        cont += 1

    }
    else if(cont == 5){

        elementoImg.src = "./img/Tristeza.png"
        elementoNome.innerText = " Tristeza "
        elementoDesc.innerText = "As vezes as coisas podem parecer meio sem cor ... tá tudo bem, isso também passa"
        nomeButton.innerText = "Volte ao início"
        cont += 1

    }
        else if(cont == 6){

        elementoImg.src = "./img/cena-filme-min.jpg"
        elementoNome.innerText = " Explorador da mente "
        elementoDesc.innerText = "São tantas emoções na nossa cabeça, vamos explorar esses moods!"
        nomeButton.innerText = "Inicie o Tour!"
        cont = 1

    }

})