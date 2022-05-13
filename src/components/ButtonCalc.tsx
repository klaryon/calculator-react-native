import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  backgroundColor?: string;
  width?: boolean;
}

export const ButtonCalc = ({
  text,
  backgroundColor = '#2D2D2D',
  width = false,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          backgroundColor: backgroundColor,
          width: width ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: backgroundColor === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
