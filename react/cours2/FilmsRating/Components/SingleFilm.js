import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


export default class SingleFilm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { film } = this.props.route.params;
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Image source={{uri : film.imageUrl}} style={styles.cover}/>
                    <Text style={styles.title}>{film.title}</Text>
                    <Text>{film.description}</Text>
                    <Text>note : {film.note}/5</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    cover: {
        width: 300,
        height: 500,
        resizeMode: "contain"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    }
})