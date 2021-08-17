/*

var / let const

*/

/*var nome='Julio'; // variavel global
let sobreNome='Afonso'

if(true){
	console.log('Var nome= '+ nome);
	var nm = nome;
	console.log('Chamando o sobrenome '+ sobreNome);
	let sn = 'Carvalho';
	console.log(sobreNome);
}

console.log('Meu nome é '+nm+' '+sobreNome+' '+sn);
console.log('Var nome= '+ nm);*/

var Pessoa = {
	nome : 'Julio',
	rua : 'Rua lá',
	ncasa : '777',
	dados: function(){
		document.write(
			'Nome...:'+this.nome+'<br>'+
			'Rua...:'+this.rua+'<br>'+
			'Número...:'+this.ncasa+'<br>')
	}
}

Pessoa.dados();

/*console.log('Nome '+Pessoa.nome+
			' Endereço '+Pessoa.rua+
			' Numero '+Pessoa.ncasa);*/