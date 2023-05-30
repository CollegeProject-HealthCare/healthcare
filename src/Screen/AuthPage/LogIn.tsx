import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import { Button } from '../../Components/Button';
import Separator from '../../Components/Separator';
import { Colors, setWidth, setHeight, Images, Fonts } from '../../Components/Theme';
import { generateOtpAPI } from '../../Services/auth';

const NumberVerification = () => {
  const navigation = useNavigation();
  const [mobileNumber, setmobileNumber] = useState('');
  const [isValidNumberFlag, setValidNumberFlag] = useState<Boolean>(false);

  /**validatemobileNumber is a function for checking(if the input value is number or not) */
  function validatemobileNumber(number: string): Boolean {
    const regexp = new RegExp('^[0-9]{0,10}$');
    return regexp.test(number);
  }

  /**onChangeHandler is checking(for any special character) in the number entered by the user */
  function onChangeHandler(text: string) {
    let res = validatemobileNumber(text);
    setValidNumberFlag(res);
    if (res === true) {
      setmobileNumber(text);
    }
  }

  /**onPressCheck is navigating the user to OtpVerification page by checking the
   * correct format and length of a number
   */

  function onPressCheck() {
    (isValidNumberFlag === true && mobileNumber.length === 10 ? generateOtpAPI(mobileNumber) : null)
      ? navigation.navigate('OtpVerification', {
          mobileNumber,
        })
      : // : notifyMessage('Enter Your Correct Phone Number');
        console.log('first');
  }

  return (
    <>
      <View style={NumberVerificationStyle.inputsContainer}>
        <Text style={NumberVerificationStyle.primaryText}>Enter Your Mobile Number</Text>
        <Separator height={setHeight(2)} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={NumberVerificationStyle.countryListContainer}>
            <Image style={NumberVerificationStyle.image} source={Images.IndianFlag} />
            <Text style={NumberVerificationStyle.countryCodeText}>{'+91'}</Text>
          </TouchableOpacity>
          <View style={NumberVerificationStyle.phoneInputContainer}>
            <TextInput
              maxLength={10}
              placeholder='Phone Number'
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              keyboardType='number-pad'
              style={NumberVerificationStyle.inputText}
              onChangeText={onChangeHandler}
              value={mobileNumber}
            />
          </View>
        </View>
        <Separator height={setHeight(1)} />
        <Text style={NumberVerificationStyle.verificationText}>
          {mobileNumber.length !== 0 ? (isValidNumberFlag ? '' : 'Invalid') : null}
        </Text>
      </View>
      <Button
        text='Next'
        height={setHeight(6)}
        width={setWidth(70)}
        color={Colors.buttonGreen}
        textColor={Colors.white}
        textFontSize={setHeight(2.3)}
        onPress={onPressCheck}
      />
    </>
  );
};

const NumberVerificationStyle = StyleSheet.create({
  primaryText: {
    color: Colors.textColor,
    fontSize: 17,
    fontFamily: Fonts.Poppins,
  },
  inputsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: setHeight(2),
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: setWidth(20),
    marginRight: setWidth(1.5),
    borderRadius: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row',
  },
  image: {
    height: setHeight(4),
    width: setWidth(7),
    borderRadius: 50,
  },
  countryCodeText: {
    fontSize: 16,
    color: Colors.DEFAULT_BLACK,
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 8,
    borderColor: Colors.LIGHT_GREY2,
    width: setWidth(65),
    height: setHeight(6),
  },
  inputText: {
    fontSize: 18,
    height: setHeight(6),
    marginLeft: 10,
    color: Colors.DEFAULT_BLACK,
    letterSpacing: 1,
  },
  verificationText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

/**Login Page Code */
const LoginSignupScreen = () => {
  const [didKeyboardShow, setKeyboardShow] = useState<boolean>(true);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    //  cleaningup the keyboard event with remove listeners
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardShow(false);
  };

  const _keyboardDidHide = () => {
    setKeyboardShow(true);
  };

  return (
    <View style={styles.container}>
      {didKeyboardShow ? (
        <KeyboardAvoidingView style={styles.header} behavior='padding'>
          <Separator height={setHeight(4)} />
          <Image source={Images.AppLogo} style={styles.logo1} />
          <Separator height={setHeight(5)} />
          <View style={styles.textFlex}>
            <Text style={styles.textStyle}>Save Life With</Text>
            <Separator height={setHeight(1)} />
            <Text style={styles.textStyle}>Digital Help</Text>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <View style={styles2.header}>
          <Separator height={setHeight(4)} />
          <Image source={Images.AppLogo} style={styles2.logo1} />
          <Separator height={setHeight(4)} />

          <View style={styles2.textFlex}>
            <Text style={styles2.textStyle}>Save Life With</Text>
            <Separator height={setHeight(1)} />
            <Text style={styles2.textStyle}>Digital Help</Text>
          </View>
        </View>
      )}
      <Separator height={setHeight(6)} />
      <NumberVerification />
    </View>
  );
};
export default LoginSignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroudColor,
  },
  header: {
    alignItems: 'center',
  },
  logo1: {
    height: setHeight(35),
    width: setWidth(70),
    tintColor: Colors.buttonGreen,
  },
  textFlex: {
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.textColor,
    fontFamily: Fonts.Sevillana,
    fontSize: 30,
    letterSpacing: 1,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroudColor,
  },
  header: {
    alignItems: 'center',
  },
  logo1: {
    height: setHeight(20),
    width: setWidth(45),
    tintColor: Colors.buttonGreen,
  },
  textFlex: {
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.textColor,
    fontFamily: Fonts.Sevillana,
    fontSize: 30,
    letterSpacing: 1,
  },
});
