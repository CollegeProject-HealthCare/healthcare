import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Header from '../../../Components/Header';
import { Colors, Fonts, Images, setHeight, setWidth } from '../../../Components/Theme';
import Separator from '../../../Components/Separator';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.backgroudColor,
          width: setWidth(100),
          height: setHeight(100),
        }}>
        <Header text='Alert-e' fontSize={8} />
        <Separator height={25} />
        <TouchableOpacity
          style={{
            height: setHeight(18),
            width: setWidth(40),
            borderRadius: 100,
            backgroundColor: Colors.DEFAULT_WHITE,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          {'ss' === undefined ? (
            <Image
              source={Images.handymanImg}
              style={{ width: setWidth(4), height: setHeight(10) }}
            />
          ) : (
            <Image
              source={Images.handymanImg}
              style={{ width: setWidth(30), height: setHeight(15) }}
              resizeMode={'cover'}
            />
          )}
        </TouchableOpacity>
        <Separator height={25} />
        <View style={[styles.card, styles.shadow]}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: Colors.buttonGreen, fontSize: 25, fontWeight: 'bold' }}>
              Pritom Rahaman
            </Text>
            <Separator height={10} />
            <Text style={{ color: Colors.buttonGreen, fontSize: 18, fontWeight: 'bold' }}>
              {' '}
              +91 8900920011
            </Text>
            <Separator height={10} />
            <Text style={{ color: Colors.buttonGreen, fontSize: 20, fontWeight: 'bold' }}>
              Male , 45{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 35,
          }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name='edit' size={35} color={Colors.buttonGreen} />
            <Text style={styles.textStyle}>Edit Details</Text>
          </TouchableOpacity>
          <Separator height={40} />
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name='cog' size={35} color={Colors.buttonGreen} />
            <Text style={styles.textStyle}>Settings</Text>
          </TouchableOpacity>
          <Separator height={40} />
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name='log-out' size={35} color={Colors.buttonGreen} />
            <Text style={styles.textStyle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.DEFAULT_WHITE,
    width: setWidth(90),
    height: setHeight(20),
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  textStyle: {
    color: Colors.buttonGreen,
    marginLeft: 10,
    fontSize: 25,
    fontFamily: Fonts.DMSans,
  },
});
