const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicamento")
const resp2 = document.querySelector("#outPromocao")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const promocao = Math.floor(2 * preco)

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`

    e.preventDefault()
})  