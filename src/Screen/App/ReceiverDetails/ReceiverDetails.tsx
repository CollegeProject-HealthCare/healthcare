import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, setHeight, setWidth } from '../../../Components/Theme';
import Header from '../../../Components/Header';
import Separator from '../../../Components/Separator';
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../../Components/Input';
import { Button } from '../../../Components/Button';
import testdata from '../../../TestingData/testdata';
import { useNavigation } from '@react-navigation/native';

export interface detailDatatype {
  _id: string;
  name?: string;
  relation?: string;
  mobile?: number;
}

type newData = () => detailDatatype;

const ReceiverDetails = () => {
  const navigation = useNavigation();

  return (
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
      <Button
        onPress={() => navigation.navigate('ReceiversForm')}
        text='Add Receiver Details'
        height={setHeight(6)}
        width={setWidth(90)}
        color={Colors.white}
        textColor={Colors.buttonGreen}
        textFontSize={setHeight(2.5)}
      />
      <Separator height={15} />

      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {testdata.map(details => {
            return (
              <View key={details.id} style={[styles.card, styles.shadow]}>
                <Text style={styles.ClientDetails}>
                  Relative Name: <Text style={{ color: Colors.textColor }}>{details.name}</Text>
                </Text>
                <Text style={styles.ClientDetails}>Mobile No.:{details.mobile}</Text>
                <Text style={styles.ClientDetails}>Relation:{details.relation} </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <TouchableOpacity style={styles.serviceBtn}>
                    <Text style={styles.btnName}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.serviceBtn]}>
                    <Text style={[styles.btnName]}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
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
  body: {
    height: setHeight(67),
    width: setWidth(95),
    alignSelf: 'center',
    borderRadius: 30,
    margin: 5,
    padding: 10,
    backgroundColor: Colors.buttonGreen,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: setWidth(90),
    marginBottom: 10,
  },
  shadow: {
    shadowColor: Colors.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  serviceBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: Colors.buttonGreen,
    paddingHorizontal: 12,
    marginLeft: 5,
    alignSelf: 'center',
  },
  btnName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.DEFAULT_WHITE,
    width: setWidth(18),
    height: setHeight(2),
  },
  ClientDetails: {
    color: Colors.grey,
    fontSize: setHeight(2.2),
    fontFamily: Fonts.DMSans,
    fontWeight: 'bold',
  },
});
