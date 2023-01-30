import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { Colors } from './Theme';

interface togglePropertiesType {
  trackColorFalse?: string;
  trackColorTrue?: string;
  thumbColorFalse?: string;
  thumbColorTrue?: string;
  ios_backgroundColor?: string;
  isEnabledValue: boolean;
}

const Toggle = ({
  trackColorFalse,
  trackColorTrue,
  thumbColorFalse,
  thumbColorTrue,
  ios_backgroundColor,
  isEnabledValue,
}: togglePropertiesType) => {
  const [isEnabled, setIsEnabled] = useState(isEnabledValue);
  const toggleSwitch = () => setIsEnabled((previousState: boolean) => !previousState);
  console.log(isEnabled);

  return (
    <View>
      <Switch
        trackColor={{
          false: trackColorFalse ?? Colors.DEFAULT_GREY,
          true: trackColorTrue ?? Colors.buttonGreen,
        }}
        thumbColor={
          isEnabled ? thumbColorTrue ?? Colors.DEFAULT_WHITE : thumbColorFalse ?? Colors.LIGHT_GREY
        }
        ios_backgroundColor={ios_backgroundColor ?? Colors.DEFAULT_GREEN}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }] }}
      />
    </View>
  );
};

export default Toggle;
