import React, { useState } from 'react';
import { Text } from 'react-native';
import { gyroscope, SensorTypes, setUpdateIntervalForType } from 'react-native-sensors';
import { map, filter } from 'rxjs/operators';

setUpdateIntervalForType(SensorTypes.gyroscope, 400); // defaults to 100ms

const Gyroscope = () => {
  const [gyroscopeData, setGyroscopeData] = useState<number>();

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
      <Text>Gyroscope Data={gyroscopeData}</Text>
    </>
  );
};

export default Gyroscope;
