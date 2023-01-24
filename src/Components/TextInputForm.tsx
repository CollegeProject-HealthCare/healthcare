import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  Keyboard: number;
  secureTextEntry?: boolean;
}

const TextInputForm: React.FC<Props> = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#2EC331',
    borderRadius: 10,
  },
  input: {
    height: 40,
    padding: 10,
    fontSize: 14,
  },
});

export default TextInputForm;
