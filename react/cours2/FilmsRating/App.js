import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connect from './Connect';
import Home from './Home';

const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerTintColor: "white",
            headerStyle:{
              backgroundColor:'#2A2A2A'
            },
            headerLeft: null,
            title: "Movie Ratings"
          }
        }>
          <Stack.Screen name="Connect" component={Connect} options={
            {
              headerShown: false
            }
          }/>
          <Stack.Screen name="films" component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: "center"
  },
});
