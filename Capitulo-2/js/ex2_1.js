const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // obtem o nome digitado no form
    resp.innerText = `Olá ${nome}`// exibe a resposta do programa
    e.preventDefault()
})