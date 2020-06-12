import React from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { Button } from 'react-native-elements';
import {StyleSheet, View, Text} from 'react-native'
import { Image } from 'react-native-elements'
import * as Contact from 'expo-contacts'
import * as MediaLibrary from 'expo-media-library'

export default class Map extends React.Component {

    state = {
        latitude: 37.78825,
        longitude: -121.4324,
        contacts : [],
        photos: [],
        contact: {
            name: "Aucun"
        },
        photo: {
            uri: ""
        }
    }

    getContacts = async () => {
        try {
            await Contact.requestPermissionsAsync();
            let data = await Contact.getContactsAsync();
            this.setState({contacts: data.data});
        }
        catch(e){
            console.log(e);
        }
    }

    getPhotos = async () => {
        try {
            await MediaLibrary.requestPermissionsAsync();
            let assets = await MediaLibrary.getAssetsAsync();
            this.setState({photos: assets.assets})
        }
        catch(e){
            console.log(e);
        }
    };

    getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    roll = async () => {
        let idp = this.getRandomInt(0, this.state.photos.length);
        let idc = this.getRandomInt(0, this.state.contacts.length);
        this.setState({latitude: this.getRandomArbitrary(-90, 90), longitude: this.getRandomArbitrary(-180, 180), contact: this.state.contacts[idc], photo: this.state.photos[idp]});
    };

    componentDidMount(){
        this.getContacts();
        this.getPhotos();
    }

    render(){
        return(
            <View style={styles.container}>
                <MapView style={styles.mapStyle}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 1.0922,
                        longitudeDelta: 1.0421
                    }}
                >
                    <Marker 
                        coordinate={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude
                        }}
                    >
                        <View>
                            <Image
                            style={{width: 50, height: 50}}
                            source={{ uri: this.state.photo.uri ? this.state.photo.uri : "" }}
                            />
                            <Text>{this.state.contact.name ? this.state.contact.name : "Aucun"}</Text>
                        </View>
                    </Marker>
                </MapView>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Roll"
                        onPress={this.roll}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapStyle: {
        flex: 0.8
    },
    buttonContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    }
});