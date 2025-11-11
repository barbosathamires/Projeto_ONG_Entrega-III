function mascaraCPF(cpf) {
  cpf.value = cpf.value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function mascaraTelefone(tel) {
  tel.value = tel.value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})$/, "$1-$2");
}

function mascaraCEP(cep) {
  cep.value = cep.value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

document.querySelector("#cpf")?.addEventListener("input", (e) => mascaraCPF(e.target));
document.querySelector("#telefone")?.addEventListener("input", (e) => mascaraTelefone(e.target));
document.querySelector("#cep")?.addEventListener("input", (e) => mascaraCEP(e.target));
