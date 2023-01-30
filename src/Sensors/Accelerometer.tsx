import React, { useState } from 'react';
import { Text } from 'react-native';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';
import { map, filter } from 'rxjs/operators';
import Input from '../Components/Input';
import { Colors, setHeight, setWidth } from '../Components/Theme';

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

const Accelerometer = () => {
  const [accelerometerData, setAccelerometerData] = useState<number>(0);

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
      <Input
        height={setHeight(5)}
        width={setWidth(50)}
        color={Colors.red}
        editable={false}
        borderRadius={0}
        borderColor={Colors.darkGrey}
        backgroundColor={Colors.LIGHT_GREY2}
        value={accelerometerData + ''}
      />
      {console.log('Data from accelerometerData', accelerometerData)}
    </>
  );
};

export default Accelerometer;
