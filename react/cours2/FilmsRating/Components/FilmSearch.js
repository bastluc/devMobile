import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { render } from 'react-dom'
import {connect} from 'react-redux'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

String.prototype.sansAccent = function() {
    var accent = [
      /[\300-\306]/g, /[\340-\346]/g, // A, a
      /[\310-\313]/g, /[\350-\353]/g, // E, e
      /[\314-\317]/g, /[\354-\357]/g, // I, i
      /[\322-\330]/g, /[\362-\370]/g, // O, o
      /[\331-\334]/g, /[\371-\374]/g, // U, u
      /[\321]/g, /[\361]/g, // N, n
      /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];

    var str = this;
    for (var i = 0; i < accent.length; i++) {
      str = str.replace(accent[i], noaccent[i]);
    }

    return str;
  }

class FilmSearch extends React.Component {

    constructor(props){
        super(props)
    }

    state = {
        searchText: ""
    }

    searchResults = () => {
        return this.props.films.filter(f => {
            return f.title.toLowerCase().sansAccent().includes(this.state.searchText.toLowerCase().sansAccent());
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.input} value={this.state.searchText} onChangeText={(text) => this.setState({searchText: text})} placeholder={"Rechercher..."} />
                </View>
                <View style={styles.resultsContainer}>
                    <ScrollView>
                        {
                            this.searchResults().map((film, index) => (
                                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate("film-single", {film: film})}>
                                    <View style={[styles.filmsContainer, {width: screenWidth}]}>
                                        <Text style={styles.title}>{film.title}</Text>
                                        <Text>note : {film.note}/5</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        flex: 0.2,
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#2A2A2A"
    },
    resultsContainer: {
        flex: 0.8
    },
    input: {
        width: 200,
        marginRight: 10,
        backgroundColor: "#FFF",
        padding: 8,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 15,
        color: "black"
    },
    button: {
        backgroundColor: "orange",
        width: 100,
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        alignSelf: "center"
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
    }
})

function mapStateToProps(state){
    return {films : state.films}
}
export default connect(mapStateToProps)(FilmSearch)