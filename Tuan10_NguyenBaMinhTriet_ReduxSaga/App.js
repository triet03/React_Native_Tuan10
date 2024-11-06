import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
import Screen03 from './components/Screen03';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen01">
          <Stack.Screen name="Screen01" component={Screen01} />
          <Stack.Screen name="Screen02" component={Screen02} />
          <Stack.Screen name="Screen03" component={Screen03} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
