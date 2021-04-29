function area(largura, altura) {
    const area  = largura * altura
    if (area > 20) {
        console.log(`Valor acima do premitido: ${area}m2.`)
    }else {
        return area
    }
}

console.log(area(2,2))

console.log(area(2))

console.log(area())

console.log(area(2,3,5,8,49,5))

console.log(area(7,5))
