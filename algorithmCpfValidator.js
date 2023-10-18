function validateCpf(cpf) {
    cpf = cpf.replace(/\D+/g, '')
    let c = Array.from(cpf).splice(0, 9)
    const arr = [...c].map((arr) => Number(arr))

    const n1 = c.map((c, i) => c * (i + 1))
        .reduce((ac, c) => ac += c) % 11;

    if (n1 > 9) {
        arr.push(0)
    } else {
        arr.push(n1)
    }
    const n2 = arr.map((c, i) => c * (i))
        .reduce((ac, c) => ac += c) % 11;

    if (n2 > 9) {
        arr.push(0)
    } else {
        arr.push(n2)
    }

    if (arr.join('') === cpf) {
        return console.log('CPF valid')
    } else {
        return console.log('CPF invalid')
    }
}

validateCpf(CPF)


