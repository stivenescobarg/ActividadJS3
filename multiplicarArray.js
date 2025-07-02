function multiplicar(...numeros) {
  return numeros.reduce((total, num) => total * num, 1);
}


console.log(multiplicar(2, 20, 4));