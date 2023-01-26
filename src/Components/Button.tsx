import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, ColorValue } from 'react-native';

import { Images, Colors, setHeight, setWidth } from './Theme';

interface ButtonProps {
  color?: string;
  text: string;
  width: number;
  height: number;
  borderRadius?: number;
  textColor?: string;
  textFontSize?: number;
  textFontFamily?: string;
  shadow?: string;
  borderWidth?: any;
  borderColor?: any | undefined;
  onPress?: any;
  alignSelf?: any;
  disabled?: boolean;
}

export const Button = ({
  disabled = false,
  color,
  text,
  borderWidth,
  borderColor,
  textFontSize,
  textFontFamily,
  textColor,
  borderRadius,
  width,
  height,
  shadow,
  onPress,
  alignSelf = 'center',
}: ButtonProps) => {
  const styles = StyleSheet.create({
    container: {
      width: width ? width : setWidth(90),
      height: height ? height : setHeight(6.3),
      backgroundColor: disabled ? Colors.black : color ? color : Colors.black,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: borderRadius ? borderRadius : setWidth(3),
      alignSelf: alignSelf,
      borderWidth: borderWidth ? borderWidth : null,
      borderColor: borderColor ? borderColor : null,
    },
    shadowEffwct: {
      shadowColor: 'red' ? color : 'transparent',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.51,
      shadowRadius: 10,
      elevation: 15,
      backgroundColor: color ? color : 'transparent',
    },
    text: {
      color: textColor ? textColor : '#fff',
      fontSize: textFontSize ? textFontSize : setWidth(4.4),
    },
  });

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, shadow ? styles.shadowEffwct : null]}
      onPress={onPress}>
      {text && <Text style={styles.text}>{text || 'Button'}</Text>}
    </TouchableOpacity>
  );
};
