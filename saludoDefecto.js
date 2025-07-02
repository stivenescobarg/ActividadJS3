function saludar(nombre, saludo = "Hola"){
    return `${saludo}, ${nombre}`;
}

console.log(saludar("Melissa"));
console.log(saludar("Melissa", "Buenos dias"));



