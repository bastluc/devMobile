import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, ScrollView} from 'react-native'
import { Image } from 'react-native-elements'
import * as MediaLibrary from 'expo-media-library'

export default class Photos extends React.Component {

    state = {
        photos: []
    };

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

    componentDidMount(){
        this.getPhotos();
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                {
                    this.state.photos.map((p, index) => (
                        <Image
                        style={styles.image}
                        key={index}
                        source={{ uri: p.uri }}
                        />
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
    image: {
        width: 200,
        height: 200
    }
})