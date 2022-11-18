

function calculator(operacion, a,b){
	switch (operacion) {
		case 'suma':
			return suma(a,b);
		case 'resta':
			return resta(a,b);
			break;
		case 'division':
			return division(a,b);
			break;
		case 'multiplicacion':
			return (x) = a*b;
			break;
		default:
			// statements_def
			break;
	}
}

let suma = (a,b) =>{
	return a+b;
}

let resta = (a,b) => a-b;

function division(a,b){
	return a/b;
}


//

let valDiva = 20;
let valDivb = 5;

const promise = new Promise((resolve,reject) => {
		resolve({success : calculator('division',valDiva,valDivb)});
})

const promiseMultiplicacion = new Promise((resolve,reject) => {
	    multi = 
		resolve({success : calculator('multiplicacion',valDiva,valDivb)});
});




((a,b)=> {

	console.log('Hola')
	promise.then((response) => {
	console.log(response)
	}).then ( multi => promiseMultiplicacion(a,b));



	
})(5,6);

