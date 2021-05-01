const { from, Observable } = require('rxjs')

function  primeiro() {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
        
    }
}

from ([1,2,3,4,5])
    .pipe(primeiro())
    .subscribe(console.log)