import React from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ListFilms from './ListFilms'
import AddFilm from './AddFilm'
import FilmSearch from './FilmSearch'
import Settings from './Settings'
const Tab = createBottomTabNavigator();

export default class Home extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
      
                if (route.name === 'Films') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                else if(route.name === "Ajouter") {
                    iconName = focused ? 'ios-add-circle': 'ios-add-circle';
                }
                else if(route.name === "Rechercher") {
                    iconName = focused ? 'ios-search': 'ios-search';
                }
                else if(route.name === "Paramètres") {
                    iconName = focused ? 'ios-settings' : 'ios-settings';
                }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                showIcon: true ,
                activeTintColor: 'orange',
                inactiveTintColor: '#2A2A2A',
              }}
              >
                <Tab.Screen name="Films" component={ListFilms} />
                <Tab.Screen name="Ajouter" component={AddFilm} />
                <Tab.Screen name="Rechercher" component={FilmSearch} />
                <Tab.Screen name="Paramètres" component={Settings} />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})