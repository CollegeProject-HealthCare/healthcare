import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../../Components/Header';
import { setWidth } from '../../../Components/Theme';

const Profile = () => {
  return (
    <>
      <Header text='Alert-e' />
      <View style={[styles.card, styles.shadow]}>
        <View>
          <Text>Pritom Rahaman</Text>
          <Text> +91 8900920011</Text>
          <Text>Male , 45 </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Edit Details</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: setWidth(80),
    marginBottom: 10,
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
});
