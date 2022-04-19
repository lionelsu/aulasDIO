const pessoa = {
    nome: "Lionel",
    idade: 30,
};

const pessoa1 = {
    nome: "Elen",
    idade: 30,
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

console.log(calculaIdade.call(pessoa1, [50]));
console.log(calculaIdade.apply(pessoa, 40));