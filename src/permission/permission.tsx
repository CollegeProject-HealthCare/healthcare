import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms
setUpdateIntervalForType(SensorTypes.gyroscope, 400); // defaults to 100ms

const Permission = () => {
  const [accelerometerData, setaccelerometerData] = useState<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) => {
        console.log({ x, y, z, timestamp }), setaccelerometerData(timestamp);
      });
      const gyrosubscription = gyroscope.subscribe(({ x, y, z, timestamp }) => {
        console.log('from gyro');
        console.log({ x, y, z, timestamp });
      });
      setTimeout(() => {
        // If it's the last subscription to accelerometer it will stop polling in the native API
        subscription.unsubscribe();
        gyrosubscription.unsubscribe();
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text>Timestamp: {accelerometerData}</Text>
    </View>
  );
};

export default Permission;
