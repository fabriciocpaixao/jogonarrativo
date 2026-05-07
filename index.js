const prompt = require('prompt-sync')()

let opcao
let tripCoins = 100
let mochila = []
let destinos = [
    ["São Paulo", "Café Gourmet de Torra Especial", "Pastel de Feira Raro", "Receita Clássica de Virado"],
    ["França", "Livro de Gastronomia Clássica", "Queijo Brie Curado", "Vinho Tinto Envelhecido"],
    ["Japão", "Faca Santoku Artesanal", "Hashi de Bambu", "Tempero Secreto de Ramen"]
]


function viajar() {
    tripCoins = tripCoins - 20
    let indiceSorteado = Math.floor(Math.random() * destinos.length)
    let lugarAtual = destinos[indiceSorteado]
    let nomeDoPais = lugarAtual[0]
    let indiceDoItem = Math.ceil(Math.random() * 3)
    let itemSorteado = lugarAtual[indiceDoItem]
    console.log(`Você desembarcou em: ${nomeDoPais}`)
    let pegarItem = prompt(`Você encontrou um(a) ${itemSorteado}!  Deseja guardar na mochila? (S/N): `)
    if (pegarItem === "S" || pegarItem === "s") {
    mochila.push(itemSorteado)
    console.log("Suvenir guardado na mochila!")
    } else {
    console.log("Você decidiu deixar o suvenir para trás.")
    }
    let dado = Math.ceil(Math.random()*5)
    if (dado === 1) {
        console.log("Você perdeu 50 TripCoins e não vai poder viajar! Melhor Descansar")
        tripCoins = tripCoins - 50
        prompt("Pressione [Enter] para continuar ")
    } else if (dado === 2) {
        if (mochila.length > 0) {
        let itemRoubado = mochila.pop()
        console.log(`Oh não! Você foi assaltado e perdeu seu: ${itemRoubado}`)
        } else {
            console.log("Um ladrão tentou te roubar, mas sua mochila já estava vazia!")
        }
        prompt("Pressione [Enter] para continuar ")
    } else if (dado === 3) {
        console.log("Você esta no RJ? Foi assaltado e perdeu tudoooox!")
        tripCoins = tripCoins - tripCoins
        prompt("Pressione [Enter] para continuar ")
    } else if (dado === 4) {
        console.log("Somos amigahxxs, irmahxxs, mulherexxs!!! Ganhou mais 20 TripCois!")
        tripCoins = tripCoins + 20
        prompt("Pressione [Enter] para continuar ")
    } else if (dado === 5) {
        console.log("Bobió, robó! Perdeu 10 TripCoins")
        tripCoins = tripCoins - 10

        prompt("Pressione [Enter] para continuar ")
    }
}
function verItens() {
                if (mochila.length === 0) {
                    console.log("A mochila está vazia!")
                } else {
                    for (let i = 0; i < mochila.length; i++){
                    console.log(mochila[i])
                    }
                }
            prompt("Pressione [Enter] para continuar ")
            }

function descansar() {
    tripCoins = tripCoins + 15
    console.log("Ta descansando demais hein!! Ganhou 15 TripCoins")
    prompt("Pressione [Enter] para continuar ")
}

function terminarViagem() {
    console.clear()
    console.log("Parabéns pelo Tour com a TripGo")
    console.log(`Você finalizou com ${tripCoins} TripCoins`)
    console.log("Esses foram os Souvenir coletados na viagem:")
    verItens()
    console.log("")
    console.log("")
    console.log(`
                                       .''.       
           .''.      .        *''*    :_\\/_:     . 
          :_\\/_:   _\\(/_  .:.*_\\/_*   : /\\ :  .'.:.'.
      .''.: /\\ :   ./)\\   ':'* /\\ * :  '..'.  -=:o:=-
     :_\\/_:'.:::.    ' *''*    * '.\\'/.' _\\(/_'.':'.'
     : /\\ : :::::     *_\\/_*     -= o =-  /)\\    '  *
      '..'  ':::'     * /\\ *     .'/.\\'.   '      
          *            *..*         :             
    `)
    console.log("")
    console.log("")
    prompt("Pressione [Enter] para finalizar ")      
}
    

function iniciarJogo () {
    do {
        if (tripCoins <= 0) {
            console.log("Game Over")
            return
        }
        mostrarMenu()
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 0: 
            console.log("Jogo Encerrado!")
            return
            case 1: 
            viajar ()
            break
            case 2: 
            verItens()
            break
            case 3:
            descansar()
            break
            case 4:
            terminarViagem() 
            return
            default:
                console.log("Opção Inválida")
                console.log("")
                prompt("Pressione [Enter] para continuar ")
                continue
            }
        }  while (true)
    }

function mostrarMenu() {
    console.clear()
    console.log("=== Trip Go ===")
    console.log("")
    console.log(`Total de TripCoins: ${tripCoins} `)
    console.log("")
    console.log("1. Novo Destino")
    console.log("2. Itens Guardados")
    console.log("3. Descansar")
    console.log("4. Terminar Viagem")
    console.log("0. Encerrar Jogo")
    console.log("")
}

iniciarJogo ()
