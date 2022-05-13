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
    setNumber(number + numberText);
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>{previousNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" backgroundColor="#9B9B9B" action={clear} />
        <ButtonCalc text="+/-" backgroundColor="#9B9B9B" action={clear} />
        <ButtonCalc text="del" backgroundColor="#9B9B9B" action={clear} />
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
