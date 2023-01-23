import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Card from '../../../Components/Card';
import TextInputForm from '../../../Components/TextInputForm';

const Receivers_Details = () => {
  const [email, setEmail] = useState('');

  return (
    <View>
      <Card title='Card Title' subtitle='Card Subtitle' style={{ marginTop: 20 }} />

      <TextInputForm placeholder='Email' onChangeText={text => setEmail(text)} value={email} />
    </View>
  );
};

export default Receivers_Details;
