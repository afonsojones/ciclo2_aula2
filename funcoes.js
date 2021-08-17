
function soma(){
	var x=1;
	var y=2;
	console.log(x+2);
}

//soma();

function somaPar (x, y){
	var r = x+y;
	console.log(r);
}

//somaPar(4, 9);

function mult(n, o) {
	var resultado = (n * o); //var local
	console.log(resultado);
}

function pot (n, o) {
	var resultado = Math.pow(n,o);
	console.log(resultado);
}

mult(3,4);
pot(7,2);

/*(function respostaF(){
	var nome='Julio';
	alert(nome);
	return nome;
})();*/

/*var f = function(){
	alert('funcao sem nome');
}*/

//f();
//var d = respostaF();

//var ar = ()=>{ alert('ArFunc')}
//ar();

/*( ()=>{ alert('ArFunc')} ) ();*/
