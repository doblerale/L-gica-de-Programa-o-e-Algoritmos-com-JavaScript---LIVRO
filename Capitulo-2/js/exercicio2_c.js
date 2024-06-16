const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outPrecoTerceiro")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promocao = preco * 2.5
    const sobra = preco * 0.5

    resp1.innerText = `${produto} - Promoção: leve 3 por R$: ${promocao.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${sobra.toFixed(2)}`

    e.preventDefault()
})