
const { Observable, noop } = require('rxjs')

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso!')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('Que Problema?!')
    }
})
/*
obs.subscribe(
    valor => console.log(`valor: ${valor}`),
    erro => console.log(`Erro: ${erro}`),
    () => console.log('Fim!')
)
*/

obs.subscribe({
    next(valor) {
        console.log(`valor: ${valor}`)
    },
    error(msg) { console.log(`Erro: ${msg}`) },
    complete() {
        console.log('Fim!')
    }
})