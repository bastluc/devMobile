import React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'

export default class ListFilms extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        let films = this.props.route.params.films();
        
        return(
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {
                        films.map((film, index) => (
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