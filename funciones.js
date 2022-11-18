

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

const promiseSuma = (a,b ) => {
	return new Promise((resolve,reject) => {
		resolve({sum : calculator('suma',a,b)});
})};

const promiseMultiplicacion = (a,b) => {

	return new Promise((resolve,reject) => {
	    
		resolve({multi : calculator('multiplicacion',a,b)});
}) };

const promiseresta = new Promise((resolve,reject) => {
	    let c = 4;
	    let d = 19;
		resolve({resta : calculator('resta',c,d)});
}) ;

const promiseDiv = (a,b) => {
	return new Promise((resolve,reject) => {
	   
		resolve({div : calculator('division',valDiva,valDivb)});
}) };




((a,b)=> {
	const multia = 10;
	const multib = 20;

	
	promiseresta.then((response) => {
	console.log(response)
	});

	promiseSuma(a,b).then((response) => {
	console.log(response)
	});

	promiseDiv(a,b).then((response) => {
	console.log(response)
	});

	promiseMultiplicacion(multia,multib).then((response) => {
	console.log(response)
	});

	

	
})(5,6);

