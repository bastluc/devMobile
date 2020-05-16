import React from 'react';
import {StyleSheet, View, Text, TextInput, Picker} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Logs } from 'expo';
import { connect } from 'react-redux';

class AddFilm extends React.Component {

    state = {
        title : "",
        imageUrl: "",
        note: "",
        description: ""
    }

    addFilm(){
        if(this.state.title != "" && this.state.imageUrl != "" && this.state.note != ""){
            const action = {type: "ADD_FILM", value: {title: this.state.title, imageUrl: this.state.imageUrl, note: this.state.note, description: this.state.description}}
            this.props.dispatch(action)
            this.setState({title: "", imageUrl: "", note: "", description: ""})
        }
    }

    _setNote(value){
        this.setState({note: value});
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>Ajouter un film</Text>
                <TextInput placeholder="Titre" value={this.state.title} onChangeText={(text) => this.setState({title: text})} placeholderTextColor="white" style={styles.input}/>
                <TextInput placeholder="Description" value={this.state.description} onChangeText={(text) => this.setState({description: text})} placeholderTextColor="white" style={styles.input}/>
                <TextInput placeholder="Url de l'affiche" value={this.state.imageUrl} onChangeText={(text) => this.setState({imageUrl: text})} placeholderTextColor="white" style={styles.input}/>
                <Text style={styles.noteLabel}>Note</Text>
                <Picker
                    selectedValue={this.state.note}
                    value={this.state.note}
                    onValueChange={(itemValue, itemIndex) => this._setNote(itemValue)}
                >
                    <Picker.Item label="0" value="0"/>
                    <Picker.Item label="1" value="1"/>
                    <Picker.Item label="2" value="2"/>
                    <Picker.Item label="3" value="3"/>
                    <Picker.Item label="4" value="4"/>
                    <Picker.Item label="5" value="5"/>
                </Picker>
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
    },
    noteLabel: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 17,
        fontWeight: "bold"
    }
});

function mapStateToProps(state){
    return {films : state.films}
}

export default connect(mapStateToProps)(AddFilm)