import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Connect from './Components/Connect';
import Home from './Components/Home';
import {Provider} from 'react-redux'
import Store from './Store/configureStore'
import SingleFilm from './Components/SingleFilm';

const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={
            {
              headerTintColor: "white",
              headerStyle:{
                backgroundColor:'#2A2A2A'
              }
            }
          }>
            <Stack.Screen name="Connect" component={Connect} options={
              {
                headerShown: false
              }
            }/>
            <Stack.Screen name="films" component={Home} options={
              {
                gesturesEnabled: false,
                headerLeft: null,
                title: "Movie Ratings"
              }
            }/>
            <Stack.Screen name="film-single" component={SingleFilm}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
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
