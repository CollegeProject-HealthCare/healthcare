import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Colors } from './Theme';

const VerificationField = () => {
  const [value, setValue] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const styles = StyleSheet.create({
    cell: {
      width: 35,
      height: 45,
      lineHeight: 40,
      fontSize: 30,
      fontWeight: '700',
      textAlign: 'center',
      marginLeft: 8,
      borderRadius: 6,
      backgroundColor: Colors.DEFAULT_GREY,
    },
    focusCell: {
      borderColor: '#000',
    },
  });

  const CELL_COUNT = 6;
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  return (
    <View>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  );
};

export default VerificationField;
