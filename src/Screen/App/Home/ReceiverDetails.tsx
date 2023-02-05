import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, setHeight, setWidth } from '../../../Components/Theme';
import Header from '../../../Components/Header';
import Separator from '../../../Components/Separator';
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../Components/Input';
import { Button } from '../../../Components/Button';

interface Props {
  text: string;
}

export const Receiver = (props: Props) => {
  return (
    <>
      <View style={{ paddingLeft: 10 }}>
        <Text style={styles.textStyle}>{props.text} </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Input
          width={setWidth(95)}
          height={setHeight(6)}
          color={Colors.DEFAULT_GREY}
          editable={true}
          value={'Receiver’s Name'}
        />
      </View>
      <Separator height={5} />
      <View style={{ padding: 10 }}>
        <View style={styles.phoneInputContainer}>
          <TextInput
            maxLength={10}
            placeholder='Receiver’s Phone Number'
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            keyboardType='number-pad'
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={5} />
      <View style={{ padding: 10 }}>
        <Input
          width={setWidth(95)}
          height={setHeight(6)}
          color={Colors.DEFAULT_GREY}
          editable={true}
          value={'Relation With Receiver'}
        />
      </View>
      <Separator height={setHeight(3)} />
    </>
  );
};

const ReceiverDetails = () => {
  const [count, setCount] = useState(2);

  const renderComponents = () => {
    const components = [];
    for (let i = 0; i < count; i++) {
      components.push(<Receiver key={i} text={`Receiver ${i + 1}`} />);
    }
    return components;
  };

  return (
    <>
      <View
        style={{
          backgroundColor: Colors.backgroudColor,
          width: setWidth(100),
          height: setHeight(100),
        }}>
        <Header text='Alert-e' fontSize={8} />
        <Separator height={setHeight(2)} />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'transparent',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Separator height={5} />
          <Text style={[styles.subTitle]}>Alert Notification Receiver’s Details</Text>
        </View>
        <Separator height={15} />
        <ScrollView showsHorizontalScrollIndicator={false}>
          <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10}>
            {renderComponents()}
            {count < 5 && (
              <Button
                text='Add Recevier'
                onPress={() => setCount(prevCount => prevCount + 1)}
                height={setHeight(6)}
                width={setWidth(40)}
                color={Colors.buttonGreen}
                textColor={Colors.white}
                textFontSize={setHeight(2.3)}
              />
            )}
            <Separator height={15} />
            <Button
              text='Save'
              height={setHeight(6)}
              width={setWidth(40)}
              color={Colors.buttonGreen}
              textColor={Colors.white}
              textFontSize={setHeight(2.3)}
            />

            <Separator height={15} />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </>
  );
};

export default ReceiverDetails;

const styles = StyleSheet.create({
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
});
