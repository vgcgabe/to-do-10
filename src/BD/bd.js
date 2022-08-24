export const clientes = [{
    "nome": "Gadis",
    "sobrenome": "Machado de Assis",
    "email": "gadireidelas@uol.com",
    "telefone": "40028922",
    "cep": "124578000",
    "endereco": "rua do gadi, casa do gadi",
    "endereco2": "bairro do gadi",
    "dataNasc": "07/10/02",
    "cpf": "12345678909",
    "rendaMensal": "-1000"
}, {
    "nome": "Gustavinho",
    "sobrenome": "Tigrão",
    "email": "tigrão@yahoo.com",
    "telefone": "999999999",
    "cep": "7",
    "endereco": "rua do gustavo, casa do gustavo",
    "endereco2": "bairro do gustavo",
    "dataNasc": "17/02/03",
    "cpf": "12345678990",
    "rendaMensal": "-0"
}, {
    "nome": "Carol",
    "sobrenome": "Sainte",
    "email": "sainte@bing.com",
    "telefone": "6666666666",
    "cep": "6666666",
    "endereco": "rua da carol, prédio da carol",
    "endereco2": "bigurilo",
    "dataNasc": "14/01/66",
    "cpf": "66642033369",
    "rendaMensal": "666"
}];

export let dadosAtuais = {
    "nome": "",
    "sobrenome": "",
    "email": "",
    "telefone": "",
    "cep": "",
    "endereco": "",
    "endereco2": "",
    "dataNasc": "",
    "cpf": "",
    "rendaMensal": ""
}

export const setDadosAtuais = (obj) => {
    dadosAtuais = {...dadosAtuais, ...obj}
    console.log(dadosAtuais)
}