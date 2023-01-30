import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../../Components/Input';
import Separator from '../../../Components/Separator';
import { Colors, Fonts, setHeight, setWidth } from '../../../Components/Theme';
import Toggle from '../../../Components/ToggleButton';
import Accelerometer from '../../../Sensors/Accelerometer';
import Gyroscope from '../../../Sensors/Gyroscope';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Separator height={setHeight(4)} />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.DEFAULT_WHITE,
            height: setHeight(12),
            width: setWidth(100),
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Toggle isEnabledValue={true} />
          <Text
            style={{
              color: Colors.textColor,
              fontFamily: Fonts.DMSans,
              fontSize: setHeight(2),
              fontWeight: '700',
            }}>
            Accelerometer
          </Text>
          <Accelerometer />
        </View>

        <Separator height={setHeight(4)} />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.DEFAULT_WHITE,
            height: setHeight(12),
            width: setWidth(100),
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Toggle isEnabledValue={true} />
          <Text
            style={{
              color: Colors.textColor,
              fontFamily: Fonts.DMSans,
              fontSize: setHeight(2),
              fontWeight: '700',
            }}>
            Gyroscope
          </Text>
          <Gyroscope />
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroudColor,
    alignItems: 'center',
  },
});
