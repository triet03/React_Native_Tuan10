import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';

export default function Screen01({ navigation }) {
  const [userName, setUserName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('https://i.pinimg.com/736x/b7/91/44/b79144e03dc4996ce319ff59118caf65.jpg'); // URL của avatar

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Text}>MANAGE YOUR TASK</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Enter your name"
        keyboardType="default"
        onChangeText={setUserName}
      />

      <Button
        title="GET STARTED ->"
        onPress={() => navigation.navigate('Screen02', { userName, avatarUrl })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  Text: {
    margin: 24,
    fontSize: 24,
    color: '#8353E2',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
});
