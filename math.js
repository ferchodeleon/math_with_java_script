const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado
});

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2
  }
}

console.log({
  perimetroTriangulo,
  areaTriangulo
});

console.group('Circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
// Una forma de multiplicar al cuadrado
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// Otra forma es, los ** indican al cuadrado o puede ser *** para multiplicar al cubo
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
  radioCirculo,
  diametroCirculo,
  circunferencia,
  areaCirculo,
});

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);
  return {
    circunferencia: diametro * PI,
    area: radioAlCuadrado * PI,
  }
}

console.groupEnd('Circle');