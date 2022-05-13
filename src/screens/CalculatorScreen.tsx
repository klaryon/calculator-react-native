import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <ButtonCalc text="C" backgroundColor="#9B9B9B" />
        <ButtonCalc text="+/-" backgroundColor="#9B9B9B" />
        <ButtonCalc text="del" backgroundColor="#9B9B9B" />
        <ButtonCalc text="/" backgroundColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" backgroundColor="#2D2D2D" />
        <ButtonCalc text="8" backgroundColor="#2D2D2D" />
        <ButtonCalc text="9" backgroundColor="#2D2D2D" />
        <ButtonCalc text="x" backgroundColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" backgroundColor="#2D2D2D" />
        <ButtonCalc text="5" backgroundColor="#2D2D2D" />
        <ButtonCalc text="6" backgroundColor="#2D2D2D" />
        <ButtonCalc text="-" backgroundColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" backgroundColor="#2D2D2D" />
        <ButtonCalc text="2" backgroundColor="#2D2D2D" />
        <ButtonCalc text="3" backgroundColor="#2D2D2D" />
        <ButtonCalc text="+" backgroundColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" backgroundColor="#2D2D2D" width />
        <ButtonCalc text="." backgroundColor="#2D2D2D" />
        <ButtonCalc text="=" backgroundColor="#FF9427" />
      </View>
    </View>
  );
};
