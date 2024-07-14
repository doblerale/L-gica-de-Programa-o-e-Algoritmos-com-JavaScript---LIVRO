// Cria referencia ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, adicionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()              // Evita envio do form

    const nome = frm.inNome.value  //obtem os valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso                // declara a variavel peso
    if (masculino) {          //se masculino, ou *if masculino === true
        peso = 21 * Math.pow(altura, 2)        //math.pow eleva ao quadrado
    } else {
        21 * Math.pow(altura, 2)
    }
    //apresenta resposta(altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}`
})  