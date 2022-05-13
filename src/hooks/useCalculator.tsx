import {useRef, useState} from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const createNumber = (numberText: string) => {
    //do not accept double point
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //decimal point
      if (numberText === '.') {
        setNumber(number + numberText);
        //evaluate if it is another zero, and there is a decimal point
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        //evaluate if it is different from zero and it doesn't have a decimal point
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        //avoid 000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const updatePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    updatePreviousNumber();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    updatePreviousNumber();
    lastOperation.current = Operators.multiply;
  };

  const btnSubstract = () => {
    updatePreviousNumber();
    lastOperation.current = Operators.substract;
  };

  const btnAdd = () => {
    updatePreviousNumber();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.substract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setPreviousNumber('0');
  };

  return {
    number,
    previousNumber,
    clear,
    createNumber,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnAdd,
    calculate,
  };
};
