// esperar 3000
// gerar númneros de 500ms

const { timer } = require('rxjs')

const obs = timer(3000, 500)


const sub1 = obs.subscribe(num => {
    console.log(`1# gerou o número ${num}`)
})

const sub2 = obs.subscribe(num => {
    console.log(`2# gerou o número ${num}`)
})
// depois 10s unsubscribe

sub1.add(sub2)

setTimeout(() => {
    sub1.unsubscribe()

}, 10000);