const readline = require('readline')

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

//obterResposta('esse é um teste?')
//   .then(console.log)

//observer
function namorada() {
    console.log('N: Apagar as luzes')
    console.log('N: Pedir silencio')
    console.log('N: Agritar')
}

// observer
function sindico(evento) {
    console.log('s: Monitorando o barrulho!')
    console.log(`S: evento -> ${evento.data}`)
    console.log(`S: evento -> ${evento.resp}`)
}

//subject
async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('o namorado cegou?(s/N/q)')
        if (resp.toLowerCase() === 's') {
            // os observadores são notificados
            (interessados || []).forEach(obs => obs({resp, data: Date.now()}));
        } else if (resp.toLowerCase() === 'q') {
            break
        }

    }

}

/*
    chamada da função -> Registra dois Observadores 
    Os observadores são : namorada, sindico [namorada, sindico]
    O subject é o porteiro! 
*/
porteiro([namorada, sindico])