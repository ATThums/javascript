function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return "Impar!"
    }
}

let res = parimpar(128)
console.log(`${res}`)