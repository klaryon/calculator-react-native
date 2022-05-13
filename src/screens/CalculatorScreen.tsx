import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.resultSmall}>{previousNumber}</Text>
      )}

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
        <ButtonCalc text="/" backgroundColor="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="8" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="9" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="x" backgroundColor="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="5" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="6" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="-" backgroundColor="#FF9427" action={btnSubstract} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="2" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="3" backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="+" backgroundColor="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          text="0"
          backgroundColor="#2D2D2D"
          action={createNumber}
          width
        />
        <ButtonCalc text="." backgroundColor="#2D2D2D" action={createNumber} />
        <ButtonCalc text="=" backgroundColor="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
