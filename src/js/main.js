function contar() {
    var inicio = Number(document.querySelector('#numInicio').value)
    var fim = Number(document.querySelector('#numFim').value)
    var passos = Number(document.querySelector('#numPasso').value)
    var bContar = document.querySelector('#btnContar')
    var res = document.querySelector('#res')

    if (isNaN(inicio) || isNaN(fim) || passos == 0) {
        window.alert('[ERRO], Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        if (passos <= 0) {
            window.alert('[Faltam Dados], sera considerado passo 1')
            passos = 1
        }
        //Contagem Crescente
        if (inicio < fim) {
            for (var i = inicio; i <= fim; i = i + passos) {
                res.innerHTML += `${i} 👉`
            }

            // contagem regressiva
        } else {
            for (var i = inicio; i >= fim; i = i - passos) {
                res.innerHTML += `${i} 👉 `
            }

        }
        if (passos > fim) {
            res.innerHTML += `${i} 👉`
        } else {
            res.innerHTML += `${i}`
        }
        res.innerHTML += `\u{1F3C1}`
    }

}
