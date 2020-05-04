import React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import FILMS from './global'

export default class ListFilms extends React.Component {

    

    state = {
        films: FILMS
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {
                        this.state.films.map((film, index) => (
                        <Text key={index}>{film.title}</Text>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});