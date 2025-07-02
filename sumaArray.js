function sumarArray(datos){
    let suma= 0
    for (let pos = 0; pos<datos.length; pos=+1){
        suma+=datos[pos]
    }
    return suma 
}
 let resultado= sumarArray([1, 2, 3, 8])
console.log(resultado);
                                                     