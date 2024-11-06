import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../store/slice';

const Screen03 = ({ route, navigation }) => {
  const { userName, avatarUrl, task } = route.params;
  const dispatch = useDispatch();
  const [jobName, setJobName] = useState(task ? task.name : '');

  const handleSave = () => {
    const newTask = { id: task ? task.id : Date.now().toString(), name: jobName };
    if (task) {
      dispatch(updateTask(newTask)); // Chỉnh sửa
    } else {
      dispatch(addTask(newTask)); // Thêm mới
    }
    navigation.navigate('Screen02', { userName, avatarUrl });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: avatarUrl }} style={styles.profileImage} />
        <View style={styles.headerText}>
          <Text style={styles.greetingText}>Hi {userName}</Text>
          <Text style={styles.subtitleText}>Have a great day ahead</Text>
        </View>
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={jobName}
        onChangeText={setJobName}
      />

      <Button title="FINISH" onPress={handleSave} color="#00C6AE" />

      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/yellow-note-paper-with-red-pin_1284-42430.jpg' }} 
        style={styles.bottomImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 14,
    color: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  bottomImage: {
    width: 300,
    height: 300,
  },
});

export default Screen03;
