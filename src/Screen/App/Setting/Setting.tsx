import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Header from '../../../Components/Header';
import { Colors, Fonts, Images, setHeight, setWidth } from '../../../Components/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Separator from '../../../Components/Separator';
import ToggleBtn from '../../../Components/ToggleBtn';

const Settings = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.AppBg,
          width: setWidth(100),
          height: setHeight(100),
        }}>
        <Header text='Alert-e' fontSize={8} />
        <View style={styles.body}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'transparent',
              alignItems: 'center',
            }}>
            <FontAwesome5 name='cog' size={35} color={Colors.DEFAULT_WHITE} />
            <Separator height={60} />
            <Text style={[styles.subTitle]}>Settings</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              backgroundColor: 'transparent',
            }}>
            <Image source={Images.handymanImg} style={styles.profileImage} resizeMode={'cover'} />
            <Text style={styles.clintName}>Md Ghazanfar</Text>
          </View>
          <View style={[styles.separator, { width: setWidth(90), marginTop: 10 }]} />
          <View>
            <Text style={{ color: Colors.buttonGreen, fontSize: 20, padding: 10 }}>
              Account Settings
            </Text>
          </View>
          <View style={styles.setting}>
            <Text style={styles.feature}>Language</Text>
            <TouchableOpacity>
              <Icon name='chevron-right' color={Colors.DEFAULT_BLACK} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.setting}>
            <Text style={styles.feature}>Push notifications</Text>
            <View>
              <ToggleBtn />
            </View>
          </View>
          <View style={styles.setting}>
            <Text style={styles.feature}>Dark mode</Text>
            <View>
              <ToggleBtn />
            </View>
          </View>
          <View style={[styles.separator, { width: '100%', marginTop: 10 }]} />
          <Text style={{ color: Colors.buttonGreen, fontSize: 20, padding: 10 }}>More</Text>
          <View style={styles.setting}>
            <TouchableOpacity>
              <Text style={styles.feature}>About us</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name='chevron-right' color={Colors.DEFAULT_BLACK} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.setting}>
            <Text style={styles.feature}>Privacy policy</Text>
            <TouchableOpacity>
              <Icon name='chevron-right' color={Colors.DEFAULT_BLACK} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.setting}>
            <Text style={styles.feature}>Terms and conditions</Text>
            <TouchableOpacity>
              <Icon name='chevron-right' color={Colors.DEFAULT_BLACK} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: setHeight(0.2),
    width: setWidth(80),
    alignSelf: 'center',
    backgroundColor: Colors.buttonGreen,
  },
  body: {
    height: setHeight(35),
    width: setWidth(95),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttonGreen,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  backIcon: {
    fontSize: setHeight(4),
    backgroundColor: Colors.buttonGreen,
    borderRadius: 6,
    width: setWidth(8),
  },
  subTitle: {
    fontSize: setWidth(8),
    marginLeft: 10,
    alignItems: 'center',
    color: Colors.DEFAULT_WHITE,
    fontWeight: 'bold',
    fontFamily: Fonts.DMSans,
  },
  card: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: setWidth(10),
    width: setWidth(90),
    alignSelf: 'center',
    marginTop: setHeight(-25),
    height: setHeight(80),
  },
  profileImage: {
    width: setWidth(20),
    height: setHeight(10),
    borderRadius: setWidth(10),
  },
  clintName: {
    alignItems: 'center',
    fontSize: setWidth(6),
    color: Colors.DEFAULT_BLACK,
    fontWeight: 'bold',
    marginLeft: setWidth(8),
  },
  feature: {
    color: Colors.DEFAULT_BLACK,
    fontSize: setWidth(6),
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: setHeight(1.5),
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
});

export default Settings;
