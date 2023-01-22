import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { Colors, setWidth, setHeight } from '../../Components/Theme';

const LogIn = ({ navigation }: any) => {
  const [mobileNumber, setmobileNumber] = useState('');
  const [isValidNumberFlag, setValidNumberFlag] = useState<Boolean>(false);

  function validatemobileNumber(number: string): Boolean {
    const regexp = new RegExp('^[0-9]{0,10}$');
    return regexp.test(number);
  }

  function onChangeHandler(text: string) {
    let res = validatemobileNumber(text);
    setValidNumberFlag(res);
    if (res === true) {
      setmobileNumber(text);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.primaryText}>Login Or SignUp</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity style={styles.countryListContainer}>
          <Text style={styles.countryCodeText}>{'+91'}</Text>
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput
            maxLength={10}
            placeholder='Phone Number'
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            keyboardType='number-pad'
            style={styles.inputText}
            onChangeText={onChangeHandler}
            value={mobileNumber}
          />
        </View>
        <Text style={styles.verificationText}>
          {mobileNumber.length !== 0 ? (isValidNumberFlag ? '' : 'Invalid') : null}
        </Text>
      </View>
      <TouchableOpacity style={[styles.signinButton, { alignSelf: 'center' }]} activeOpacity={0.8}>
        <Text style={styles.signinButtonText}>LogIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Light_Blue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    height: setHeight(100),
    width: setWidth(100),
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    marginRight: 5,
    borderRadius: 8,
    width: setWidth(15),
    height: setHeight(6),
    alignItems: 'center',
  },
  countryCodeText: {
    fontSize: setWidth(8),
    color: Colors.DEFAULT_BLACK,
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    borderColor: Colors.LIGHT_GREY2,
    width: setWidth(60),
    borderRadius: 10,
  },
  inputText: {
    fontSize: setWidth(6),
    height: setHeight(6),
    color: Colors.DEFAULT_BLACK,
    letterSpacing: 1,
  },
  verificationText: {
    color: 'red',
    fontWeight: 'bold',
  },
  signinButton: {
    backgroundColor: Colors.Button_Blue,
    borderRadius: 8,
    height: setHeight(6),
    width: setWidth(50),
    marginTop: setHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
  },

  primaryText: {
    color: Colors.INACTIVE_GREY,
    fontSize: setWidth(8),
    fontWeight: 'bold',
    marginBottom: setHeight(2),
  },
  secondaryText: {
    color: 'black',
    marginTop: '10%',
  },
  thirdText: {
    color: 'blue',
    marginTop: '3%',
  },
});
