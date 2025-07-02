function esPar (numero){
    let resultado = numero % 2;
    if(resultado == 0){
        return true
    }
    else{
        return false
    }
}
 console.log(esPar(6));
 console.log(esPar(7));