import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Colors, Fonts, setHeight, setWidth } from '../../../Components/Theme';
import Separator from '../../../Components/Separator';
import Header from '../../../Components/Header';
import Input from '../../../Components/Input';
import { Button } from '../../../Components/Button';

const EditDetails = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.backgroudColor,
          width: setWidth(100),
          height: setHeight(100),
        }}>
        <Header text='Alert-e' fontSize={8} />
        <Separator height={15} />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'transparent',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Separator height={5} />
          <Text style={[styles.subTitle]}>Edit Details</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.textStyle}>Name</Text>
          <Input
            width={setWidth(95)}
            height={setHeight(6)}
            color={Colors.DEFAULT_GREY}
            editable={true}
            value={'name'}
          />
        </View>
        <Separator height={10} />
        <View style={{ padding: 10 }}>
          <Text style={styles.textStyle}>Phone Number</Text>
          <View style={styles.phoneInputContainer}>
            <TextInput
              maxLength={10}
              placeholder='Phone Number'
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              keyboardType='number-pad'
              style={styles.inputText}
            />
          </View>
        </View>
        <Separator height={10} />
        <View style={{ padding: 10 }}>
          <Text style={styles.textStyle}>Gender</Text>
          <Input
            width={setWidth(95)}
            height={setHeight(6)}
            color={Colors.DEFAULT_GREY}
            editable={true}
            value={'gender'}
          />
        </View>
        <Separator height={10} />
        <View style={{ padding: 10 }}>
          <Text style={styles.textStyle}>Age</Text>
          <View style={styles.phoneInputContainer}>
            <TextInput
              maxLength={2}
              placeholder='age'
              placeholderTextColor={Colors.DEFAULT_GREY}
              selectionColor={Colors.DEFAULT_GREY}
              keyboardType='number-pad'
              style={styles.inputText}
            />
          </View>
        </View>
        <Separator height={25} />
        <Button
          text='Save'
          height={setHeight(6)}
          width={setWidth(50)}
          color={Colors.buttonGreen}
          textColor={Colors.white}
          textFontSize={setHeight(2.3)}
        />
      </View>
    </>
  );
};

export default EditDetails;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: setWidth(8),
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
    fontSize: 18,
    height: setHeight(6),
    marginLeft: 10,
    color: Colors.DEFAULT_BLACK,
    letterSpacing: 1,
  },
});
