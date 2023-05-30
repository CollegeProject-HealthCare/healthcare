import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, setHeight, setWidth } from '../../../Components/Theme';
import Header from '../../../Components/Header';
import Separator from '../../../Components/Separator';
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../Components/Input';
import { Button } from '../../../Components/Button';

const ReceiversForm = () => {
  return (
    <>
      <View style={styles.body}>
        <Header text='Alert-e' fontSize={8} />
        <Separator height={25} />
        <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
          <Text style={[styles.subTitle]}>Fill Notification Receiver’s Details</Text>
        </View>
        <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={10}
          style={{
            height: setHeight(65),
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={styles.reciverData}>Receiver’s Name</Text>
            <Input
              width={setWidth(95)}
              height={setHeight(6)}
              color={Colors.DEFAULT_GREY}
              editable={true}
              value={'Receiver’s Name'}
            />
          </View>

          <Separator height={15} />
          <Text style={styles.reciverData}>Receiver’s Number</Text>
          <View style={styles.phoneInputContainer}>
            <TextInput
              maxLength={10}
              placeholder='Receivers Number'
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              keyboardType='number-pad'
              style={styles.inputText}
            />
          </View>

          <Separator height={15} />
          <View>
            <Text style={styles.reciverData}>Receiver’s Number</Text>
            <View>
              <Input
                width={setWidth(95)}
                height={setHeight(6)}
                color={Colors.DEFAULT_GREY}
                editable={true}
                value={'Relation With Receiver'}
              />
            </View>
          </View>

          <Separator height={setHeight(10)} />
          <Button
            text='Save'
            height={setHeight(6)}
            width={setWidth(40)}
            color={Colors.buttonGreen}
            textColor={Colors.white}
            textFontSize={setHeight(2.3)}
          />
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default ReceiversForm;

const styles = StyleSheet.create({
  body: {
    height: setHeight(100),
    width: setWidth(100),
    backgroundColor: Colors.AppBg,
  },
  subTitle: {
    fontSize: setHeight(2.7),
    color: Colors.buttonGreen,
    fontWeight: 'bold',
    fontFamily: Fonts.DMSans,
  },
  textStyle: {
    fontSize: setHeight(2.5),
    fontWeight: 'bold',
    color: Colors.darkGrey,
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 8,
    borderColor: Colors.buttonGreen,
    borderWidth: 0.1,
    width: setWidth(95),
    height: setHeight(6),
  },
  inputText: {
    fontSize: 16,
    height: setHeight(6),
    marginLeft: 10,
    color: Colors.DEFAULT_BLACK,
    letterSpacing: 1,
  },
  reciverData: {
    color: Colors.buttonGreen,
    fontSize: setHeight(3),
    paddingLeft: 10,
    fontFamily: Fonts.Abril,
  },
});
