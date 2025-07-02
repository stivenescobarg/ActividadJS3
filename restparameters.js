function multiplicar(...numeros) {
  return numeros.reduce((producto, num) => producto * num, 1);
}

console.log(multiplicar(2, 3, 4)); // 24