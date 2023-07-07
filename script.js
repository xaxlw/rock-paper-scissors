const jogadasDisponiveis = ["pedra", "papel", "tesoura"];
let computador = 0;            
let jogador = 0;
let ganhou;
let numPc;

/* 0             1           2
tesoura >   "pedra"   >   papel
pedra   >   "papel"   >   tesoura
papel   >   "tesoura" >   pedra
*/

function jogar(jogadaDoUsuario) {
    const jogadaAleatoria = Math.floor(Math.random() * 3)
    const jogadaDoComputador = jogadasDisponiveis[jogadaAleatoria];

    switch(jogadaDoUsuario)
    {
        case "pedra": 
            if(jogadaDoComputador === "tesoura") 
                numPc = 0
            else if(jogadaDoComputador === "papel") 
                numPc = 2
            else 
                numPc = 1
            break
        case "papel": 
            if(jogadaDoComputador === "pedra") 
                numPc = 0
            else if(jogadaDoComputador === "tesoura")  
                numPc = 2
            else 
                numPc = 1
            break
        case "tesoura":
            if(jogadaDoComputador === "papel")  
                numPc = 0
            else if(jogadaDoComputador === "pedra")  
                numPc = 2
            else
                numPc = 1
            break
    }

    // verificar resultado
    if(1 < numPc) ganhou = false
        else if(1 > numPc) ganhou = true

    // resultado
    if(numPc == 1) alert('Empate!');
        else {
            alert(`${ganhou ? "GANHOU!" : "PERDEU!"} o computador jogou ${jogadaDoComputador}`);
            ganhou ? jogador++ : computador++
        }

    // escrevendo os pontos
    document.querySelector('#pontosu').innerHTML = jogador;
    document.querySelector('#pontospc').innerHTML = computador;
}
