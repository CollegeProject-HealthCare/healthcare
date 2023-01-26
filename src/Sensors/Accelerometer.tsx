import React, { useState } from 'react';
import { Text } from 'react-native';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';
import { map, filter } from 'rxjs/operators';

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

const Accelerometer = () => {
  const [accelerometerData, setAccelerometerData] = useState<number>();

  accelerometer
    .pipe(
      map(({ x, y, z }) => x + y + z),
      filter(speed => speed > 11),
    )
    .subscribe(
      speed => setAccelerometerData(speed),
      error => {
        console.log('The sensor is not available');
      },
    );

  return (
    <>
      <Text>AccelerometerData = {accelerometerData}</Text>
    </>
  );
};

export default Accelerometer;
