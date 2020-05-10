import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Logs } from 'expo';

export default class AddFilm extends React.Component {

    state = {
        title : ""
    }

    addFilm(){
        this.props.route.params.addFilm({
            title: this.state.title
        })
        this.setState({title: ""})
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>Ajouter un film</Text>
                <TextInput placeholder="Titre" value={this.state.title} onChangeText={(text) => this.setState({title: text})} placeholderTextColor="white" style={styles.input}/>
                <TouchableOpacity style={styles.button} onPress={() => {this.addFilm()}}>
                    <Text style={{textAlign: "center"}}>Ajouter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 20
    },
    input: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#2A2A2A",
        padding: 8,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 15,
        color: "white"
    },
    button: {
        backgroundColor: "orange",
        width: 100,
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        alignSelf: "center"
    }
});