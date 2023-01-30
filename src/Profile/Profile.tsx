import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 16,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 48,
  },
  avatar: {
    width: 64,
    height: 64,
    marginRight: 16,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#0088CC',
  },
  uploadPhoto: {
    fontSize: 16,
    lineHeight: 20,
    color: '#0088CC',
  },
  lastInput: {
    marginBottom: 88,
  },
  buttonContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0,
    backgroundColor: 'white',
    paddingVertical: 8,
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 16,
  },
});
