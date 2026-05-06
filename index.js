const prompt = require('prompt-sync')()

let opcao
let mochila = []

funcion viajar(Math.ceil(Math.random()*5))

function iniciarJogo () {
    do {
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
            console.log("Opção 2")
            break
            case 3:
            console.log("Opção 3")
            break
            case 4:
            console.log("Opção 4")
            break
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
    console.log("1. Novo Destino")
    console.log("2. Itens Guardados")
    console.log("3. Descansar")
    console.log("4. Terminar Viagem")
    console.log("0. Encerrar Jogo")
    console.log("")
}

iniciarJogo ()
