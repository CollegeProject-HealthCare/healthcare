import { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Button } from '../../Components/Button';
import { Colors, setWidth, setHeight, Images } from '../../Components/Theme';

const NumberVerification = () => {
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

  return (
    <View>
      <Text style={styles1.primaryText}>Enter Your Mobile Number</Text>
      <View style={styles1.inputsContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles1.countryListContainer}>
            <Image style={styles1.image} source={Images.IndianFlag} />
            <Text style={styles1.countryCodeText}>{'+91'}</Text>
          </TouchableOpacity>
          <View style={styles1.phoneInputContainer}>
            <TextInput
              maxLength={10}
              placeholder='Phone Number'
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              keyboardType='number-pad'
              style={styles1.inputText}
              onChangeText={onChangeHandler}
              value={mobileNumber}
            />
          </View>
        </View>
        <Text style={styles1.verificationText}>
          {mobileNumber.length !== 0 ? (isValidNumberFlag ? '' : 'Invalid') : null}
        </Text>
      </View>
      <Button
        text='Save Changes'
        height={setHeight(6)}
        width={setWidth(43)}
        color={Colors.buttonGreen}
        textColor={Colors.white}
      />
    </View>
  );
};

const styles1 = StyleSheet.create({
  primaryText: {
    color: Colors.textColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputsContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: '5%',
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: setWidth(22),
    marginRight: 5,
    borderRadius: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row',
  },
  image: {
    height: 35,
    width: 30,
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
    width: '70%',
    height: '100%',
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
          <Image source={Images.appLogo} style={styles.logo1} />
          <View style={styles.textFlex}>
            <Text style={[styles.primaryText, styles.mainText]}>Save Life With</Text>
            <Text style={styles.primaryText}>Digital Help</Text>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <View style={styles2.header}>
          <Image source={Images.appLogo} style={styles2.logo1} />
          <View style={styles2.textFlex}>
            <Text style={[styles2.primaryText, styles2.mainText]}>Save Life With</Text>
            <Text style={styles.primaryText}>Digital Help</Text>
          </View>
        </View>
      )}

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
    // flex: 3,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo1: {
    marginTop: '7%',
    height: setHeight(18),
    width: setWidth(60),
  },
  textFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  mainText: {
    color: Colors.DEFAULT_GREEN,
    fontWeight: 'bold',
    marginBottom: setHeight(2),
  },
  primaryText: {
    color: 'black',
    fontSize: 18,
    letterSpacing: 0.5,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT_GREY2,
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logo1: {
    marginTop: '5%',
    marginBottom: '3%',
    height: setHeight(13),
    width: setWidth(40),
  },
  textFlex: {
    display: 'flex',
    alignItems: 'center',
  },
  mainText: {
    color: 'grey',
    fontSize: 15,
    marginBottom: setHeight(1),
  },
  primaryText: {
    color: Colors.black,
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
