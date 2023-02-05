import React, { useState } from 'react';
import { gyroscope, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors';
import { map, filter } from 'rxjs/operators';
import Input from '../Components/Input';
import { setHeight, setWidth, Colors } from '../Components/Theme';

setUpdateIntervalForType(SensorTypes.gyroscope, 400); // defaults to 100ms

const Gyroscope = () => {
  const [gyroscopeData, setGyroscopeData] = useState<number>(0);

  gyroscope
    .pipe(
      map(({ x, y, z }) => x + y + z),
      filter(speed => speed > 1),
    )
    .subscribe(
      speed => {
        console.log(speed), setGyroscopeData(speed);
      },
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
        value={gyroscopeData + ''}
      />
      {console.log('Data from gyroscopeData', gyroscopeData)}
    </>
  );
};

export default Gyroscope;
