import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from '../../Components/Button';
import Input from '../../Components/Input';
import Separator from '../../Components/Separator';
import { Colors, setHeight, setWidth, Images, Fonts } from '../../Components/Theme';
import VerificationField from '../../Components/Verification';

const OtpVerification = () => {
  return (
    <View style={styles.container}>
      <Separator height={setHeight(1)} />
      <Image source={Images.appLogo} style={styles.logo1} />
      <Text style={styles.primaryText}>Enter Your Mobile Number</Text>
      <Separator height={setHeight(1)} />
      <Input
        width={setWidth(75)}
        height={setHeight(6)}
        color={Colors.DEFAULT_GREY}
        editable={true}
        leftImage={Images.IndianFlag}
        value={'00000000000'}
      />
      <Separator height={setHeight(2)} />
      <View style={styles.otpBox}>
        <Text style={styles.otpText}>OTP</Text>
        <VerificationField />
      </View>
      <Separator height={setHeight(0.5)} />
      <View style={styles.otpResend}>
        <Text style={styles.textColor}>Time:15s</Text>
        <TouchableOpacity>
          <Text style={styles.textColor}>Resend</Text>
        </TouchableOpacity>
      </View>
      <Separator height={setHeight(7)} />

      <Button
        text='Verify'
        height={setHeight(6)}
        width={setWidth(70)}
        color={Colors.buttonGreen}
        textColor={Colors.white}
        textFontSize={setHeight(2.3)}
      />
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroudColor,
    alignItems: 'center',
  },
  logo1: {
    height: setHeight(50),
    width: setWidth(75),
  },
  primaryText: {
    color: Colors.textColor,
    fontSize: 17,
    fontFamily: Fonts.Poppins,
  },
  otpBox: {
    flexDirection: 'row',
    width: setWidth(80),
    height: setHeight(8),
    backgroundColor: Colors.DEFAULT_WHITE,
    alignItems: 'center',
    borderRadius: 10,
  },
  otpResend: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: setWidth(100),
  },
  textColor: {
    fontSize: 18,
    marginLeft: 10,
    color: Colors.textColor,
    // letterSpacing: 1,
  },
  otpText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.DEFAULT_BLACK,
  },
});
