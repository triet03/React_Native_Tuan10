import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, FlatList, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from '../store/actions'; // Giả sử bạn đã tạo các action này

const learn = [
  { id: '1', name: 'To check mail', icon: 'https://example.com/icon1.png' },
  { id: '2', name: 'UI task web page', icon: 'https://example.com/icon2.png' },
  { id: '3', name: 'Learn Javascript basic', icon: 'https://example.com/icon3.png' },
  { id: '4', name: 'Learn HTML Advance', icon: 'https://example.com/icon4.png' },
  { id: '5', name: 'Medical App UI', icon: 'https://example.com/icon5.png' },
  { id: '6', name: 'Learn Java', icon: 'https://example.com/icon6.png' },
];

const GridItem = ({ item, onEdit, onDelete }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.icon }} style={styles.icon} />
    <Text style={styles.itemName}>{item.name}</Text>
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => onEdit(item)}>
        <Image source={require('../assets/edit-icon.png')} style={styles.iconAction} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Image source={require('../assets/delete-icon.png')} style={styles.iconAction} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Screen02({ navigation, route }) {
  const { userName, avatarUrl } = route.params; // Lấy tên người dùng và avatar từ route params
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks); // Giả sử bạn đã lưu trữ tasks trong Redux

  const filteredLearn = tasks.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (item) => {
    navigation.navigate('Screen03', { task: item, userName, avatarUrl });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: avatarUrl }} // Avatar của bạn
          style={styles.avatar}
        />
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <TextInput
        style={styles.TextInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredLearn}
        renderItem={({ item }) => (
          <GridItem item={item} onEdit={handleEdit} onDelete={handleDelete} />
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Screen03', { userName, avatarUrl })}
      >
        <Text style={styles.Sign}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemName: {
    fontSize: 15,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TextInput: {
    width: '100%',
    height: 50,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 30,
    marginBottom: 20,
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginRight: 10,
  },
  iconAction: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    left: 150,
    backgroundColor: '#00BDD6',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  Sign: {
    fontSize: 30,
    color: 'white',
  },
});
