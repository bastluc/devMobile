import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import searchScreen from './_partials/searchScreen';
import trackSingle from './_partials/trackSingle';

const Stack = createStackNavigator();

export default class SearchIndex extends React.Component {

  render(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Rechercher" component={searchScreen} />
            <Stack.Screen name="track" component={trackSingle} />
        </Stack.Navigator>
    );
  }
}
