import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Colors, Fonts, setHeight, setWidth } from './Theme';

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
    text: {
      color: textColor ? textColor : '#fff',
      fontSize: textFontSize ? textFontSize : setWidth(4.4),
      fontFamily: textFontFamily ? textFontFamily : Fonts.Poppins,
    },
  });

  return (
    <TouchableOpacity disabled={disabled} style={styles.container} onPress={onPress}>
      {text && <Text style={styles.text}>{text || 'Button'}</Text>}
    </TouchableOpacity>
  );
};
