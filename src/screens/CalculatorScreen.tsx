import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </View>
      </View>
    </View>
  );
};
