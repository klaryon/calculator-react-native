import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const clear = () => {
    setNumber('0');
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

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>{previousNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" backgroundColor="#9B9B9B" action={clear} />
        <ButtonCalc
          text="+/-"
          backgroundColor="#9B9B9B"
          action={positiveNegative}
        />
        <ButtonCalc text="del" backgroundColor="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" backgroundColor="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="8" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="9" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="x" backgroundColor="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="5" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="6" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="-" backgroundColor="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="2" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="3" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="+" backgroundColor="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          text="0"
          backgroundColor="#2D2D2D"
          action={createNumber}
          width
        />
        <ButtonCalc text="." backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="=" backgroundColor="#FF9427" action={clear} />
      </View>
    </View>
  );
};
