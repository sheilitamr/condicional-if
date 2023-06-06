const isAdult = (name, age) => {
  if (age >= 18) {
    console.log(`Hola ${name}, eres mayor de edad`);
  } else {
    console.log(`Hola ${name}, eres menor de edad`);
  }
};
isAdult('sheila', 29);

const higherLessEquals = (number1, number2) => {
  if (number1 > number2) {
    console.log(`${number1} es mayor`);
  } else if (number1 < number2) {
    console.log(`${number2} es mayor`);
  } else {
    console.log(`${number1} y ${number2} son iguales`);
  }
};

higherLessEquals(11, 11);

const positiveNegativeOrZero = number => {
  if (number > 0) {
    console.log(`El número ${number} es positivo`);
  } else if (number < 0) {
    console.log(`El número ${number} es negativo`);
  } else {
    console.log(`El número ${number} es cero`);
  }
};
positiveNegativeOrZero(-6);

const media = (note1, note2, note3) => {
  const totalNote = (note1 + note2 + note3) / 3;
  console.log(`La nota media es ${totalNote}`);
  if (totalNote < 5) {
    console.log('Suspenso');
  } else if (totalNote < 8) {
    console.log('Aprobado');
  } else {
    console.log('Matrícula de honor');
  }
};
media(4, 5, 5);

const higher = (number1, number2, number3) => {
  if (number1 > number2 && number1 > number3) {
    console.log(`El número ${number1} es mayor`);
  } else if (number2 > number1 && number2 > number3) {
    console.log(`El número ${number2} es mayor`);
  } else {
    console.log(`El número ${number3} es mayor`);
  }
};

higher(10, 4, 3);

const integerNumber = number => {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(`El número ${number} es divisible por 3 y por 5`);
  } else if (number % 3 === 0) {
    console.log(`El número ${number} es divisible por 3`);
  } else if (number % 5 === 0) {
    console.log(`El número ${number} es divisible por 5`);
  } else console.log(`El número es ${number}`);
};
integerNumber(4);

const oddEven = number => {
  if (number % 2 === 0) {
    console.log(`El número ${number} es par`);
  } else console.log(`El número ${number} es impar`);
};
oddEven(4);

const leapYear = year => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(`El año ${year} es bisiesto`);
  } else console.log(`El año ${year} no es bisiesto`);
};
leapYear(2023);

const sum = (valor1, valor2) => {
  if (typeof valor1 === 'string') {
    valor1 = Number(valor1);
  }
  if (typeof valor2 === 'string') {
    valor2 = Number(valor2);
  }
  console.log(valor1 + valor2);
};

sum(5, '8');
