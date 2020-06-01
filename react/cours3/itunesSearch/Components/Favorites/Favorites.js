import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import {connect} from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesIndex from './_partials/FavoritesIndex';
import trackSingle from '../Search/_partials/trackSingle';
const Stack = createStackNavigator();

class Favorites extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Stack.Navigator>
                <Stack.Screen name="Favoris" component={FavoritesIndex} />
                <Stack.Screen name="TrackSingle" component={trackSingle} />
            </Stack.Navigator>
        );
    }
}

function mapStateToProps(state){
    return {favorites : state.favorites};
}
export default connect(mapStateToProps)(Favorites);