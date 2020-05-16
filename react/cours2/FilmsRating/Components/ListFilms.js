import React from 'react'
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;


class ListFilms extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
                <ScrollView style={styles.container}>
                        {
                            this.props.films.map((film, index) => (
                                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate("film-single", {film: film})}>
                                    <View style={[styles.filmsContainer, {width: screenWidth}]}>
                                        <Text style={styles.title}>{film.title}</Text>
                                        <Text>note : {film.note}/5</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    filmsContainer: {
        flexDirection: "row",
        height: 80,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#ECEFF1",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },  
    affiche: {
        width: 180,
        height: 250,
        resizeMode: "contain"
    },
    title: {
        fontSize: 17,
        fontWeight: "bold"
    }
});

function mapStateToProps(state){
    return {films : state.films}
}
export default connect(mapStateToProps)(ListFilms)