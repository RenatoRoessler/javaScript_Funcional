const { Observable, from } = require("rxjs")

function createPipeableOperator(nextFn) {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) { 
                    nextFn(subscriber, v)                    
                }
            })
        })

    }
}

function nenhum() {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.complete()
                }
            })
        })

    }

}

function ultimo() {
    return function (source) {
        return Observable.create(subscriber => {
            let ultimo
            source.subscribe({
                next(v) {
                    ultimo = v
                },
                complete() {
                    if (ultimo !== undefined) {
                        subscriber.next(ultimo)
                    }
                    subscriber.complete()
                }
            })
        })

    }
}


function primeiro() {
    return createPipeableOperator((subscriber, v)=> {
        subscriber.next(v + 100)
        subscriber.complete()
    })
}

from([1, 2, 3, 4, 5])
    .pipe(
        primeiro()

    )
    .subscribe(console.log)