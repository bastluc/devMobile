import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './Components/Favorites/Favorites';
import SearchIndex from './Components/Search/SearchIndex';
import { Icon } from 'react-native-elements';
import configureStore from "./Store/configureStore";
const { store, persistor } = configureStore();
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Tab = createBottomTabNavigator();

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Rechercher') {
                    iconName = 'search';
                  } else if (route.name === 'Favoris') {
                    iconName = "star";
                  }

                  // You can return any component that you like here!
                  return <Icon type="font-awesome" name={iconName} size={size} color={color} />;
                },
              })}
            >
              <Tab.Screen name="Rechercher" component={SearchIndex} />
              <Tab.Screen name="Favoris" component={Favorites} />
            </Tab.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}