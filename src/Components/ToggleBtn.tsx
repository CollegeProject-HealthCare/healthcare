import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { Colors } from './Theme';
const ToggleBtn = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: Colors.AppBg, true: Colors.buttonGreen }}
        thumbColor={isEnabled ? Colors.AppBg : Colors.buttonGreen}
        ios_backgroundColor={Colors.buttonGreen}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default ToggleBtn;
