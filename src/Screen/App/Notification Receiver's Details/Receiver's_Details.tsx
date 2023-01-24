import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Card from '../../../Components/Card';
import TextInputForm from '../../../Components/TextInputForm';

const Receivers_Details = () => {
  const [name1, setName1] = useState('');
  const [phoneNumber1, setPhoneNumber1] = useState('');
  const [relation1, setRelation1] = useState('');
  const [name2, setName2] = useState('');
  const [phoneNumer2, setPhoneNumber2] = useState('');
  const [relation2, setRelation2] = useState('');

  const [isSaved, setIsSaved] = useState(false);
  const handleSave = () => {
    setIsSaved(true);
    // Perform any other actions needed to save changes here
  };

  return (
    <View>
      <Card title='Alert Notification Receiver’s Details' style={{ marginTop: 20 }} />
      <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 8 }}>Receiver 1</Text>
      <TextInputForm
        placeholder='Receiver’s Name'
        onChangeText={text => setName1(text)}
        value={name1}
      />
      <TextInputForm
        placeholder='Receiver’s Phone Number'
        onChangeText={Number => setPhoneNumber1(Number)}
        value={phoneNumber1}
      />
      <TextInputForm
        placeholder='Relation With Receiver'
        onChangeText={text => setRelation1(text)}
        value={relation1}
      />

      <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 8 }}>Receiver 2</Text>
      <TextInputForm
        placeholder='Receiver’s Name'
        onChangeText={text => setName2(text)}
        value={name2}
      />
      <TextInputForm
        placeholder='Receiver’s Phone Number'
        onChangeText={Number => setPhoneNumber2(Number)}
        value={phoneNumer2}
      />
      <TextInputForm
        placeholder='Relation With Receiver'
        onChangeText={text => setRelation2(text)}
        value={relation2}
      />

      <View style={{ width: 130, alignSelf: 'center', margin: 20 }}>
        <Button title='Save Changes' color='#2EC331' onPress={handleSave} disabled={isSaved} />
        {isSaved && <Text>Changes saved!</Text>}
      </View>
    </View>
  );
};

export default Receivers_Details;
