import React from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Connect extends React.Component {

    constructor(props){
        super(props);
    }

    state = {
        id : "",
        pwd : "",
        validForm: false
    }

    connect(){
        if(this.state.id == "test" && this.state.pwd == "test"){
            this.props.navigation.push("films");
        } 
    }

    _setId(text){
        this.setState({
            id: text
        })
        this.isFormValid();
    }

    _setPwd(text){
        this.setState({
            pwd: text
        })
        this.isFormValid();
    }

    isFormValid = () => {
        if(this.state.id.length > 0 && this.state.pwd.length > 0){
            this.setState({validForm: true});
        }
        else {
            this.setState({validForm: false});
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('./assets/background.jpg')} style={styles.image}>
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>Movie Ratings</Text>
                        <TextInput keyboardType='numeric' style={styles.textInput} placeholderTextColor = "#fff" placeholder={"Identifiant"} onChangeText={(text) => this._setId(text)} />
                        <TextInput style={styles.textInput} placeholderTextColor = "#fff" secureTextEntry={true} placeholder={"Mot de passe"} onChangeText={(text) => this._setPwd(text)} />
                        <TouchableOpacity style={styles.button} disabled={!this.state.validForm} onPress={() => {this.connect()}}>
                            <Text>Connexion</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: "bold"
    },
    formContainer: {
        flex: 0.8,
        justifyContent:"center",
        alignItems: "center"
    },
    textInput: {
        alignSelf: "stretch",
        fontSize: 16,
        margin: 10,
        marginLeft: 70,
        marginRight: 70,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        backgroundColor: "#2A2A2A",
        color: "white"
    },
    button: {
        backgroundColor: "white",
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20
    }
  });