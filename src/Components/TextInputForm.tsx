import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
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
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    padding: 10,
    fontSize: 14,
  },
});

export default TextInputForm;
