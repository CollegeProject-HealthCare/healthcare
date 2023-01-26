import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, setHeight, setWidth } from './Theme';

export interface ButtonData {
  text: string;
  width?: number;
  height?: number;
  fontSize?: number;
  marginTop?: number;
  marginLeft?: number;
  textColor?: string;
  buttonColor?: string;
}

function Button({ text, width, height, fontSize, marginTop, marginLeft, textColor, buttonColor }: ButtonData) {
  
  const styles = StyleSheet.create({
    buttonStyle: {
      flexDirection: 'row',
      marginTop: marginTop? setWidth(marginTop) : setWidth(0),
      marginLeft: marginLeft? setWidth(marginLeft) : setWidth(0),
      justifyContent: 'center',
      alignItems: 'center',
      width: width ? setWidth(width) : setWidth(35),
      height: height ? setHeight(height) : setHeight(5),
      backgroundColor: buttonColor ? buttonColor : Colors.SECONDARY_GREEN,
      borderRadius: 8,
    },
  
    buttonTextStyle: {
      color: textColor ? textColor : Colors.DEFAULT_WHITE,
      fontWeight: 'bold',
      fontSize: fontSize ? setWidth(fontSize) : setWidth(5),
      fontFamily: 'Pass through',
    },
  });

  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </View>
  );
}

export default Button;