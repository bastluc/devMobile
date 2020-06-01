import React from 'react'
import {connect} from "react-redux"
import {StyleSheet, View, Alert} from 'react-native'
import {Image, Text, Button, Rating, AirbnbRating} from 'react-native-elements'
import { Audio } from 'expo-av'
import Icon from 'react-native-vector-icons/FontAwesome';


class trackSingle extends React.Component {

    constructor(props){
        super(props);
    }

    audioPreview = new Audio.Sound();

    componentDidMount(){
        this._loadPreview();
        for(i=0; i<this.props.favorites.length; i++){
            if(this.props.favorites[i].trackId == this.props.route.params.track.trackId){
                this.setState(
                    {
                        favorites: {
                            title: "Retirer des favoris",
                            color: "#fff",
                            action: this._toggleFavorites
                        },
                        infavorites: true
                    }
                );
            }
        }
    }

    componentWillUnmount(){
        this._stopPreview();
    }

    _loadPreview = async () => {
        try {
            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true
            })
            await this.audioPreview.loadAsync({uri: this.props.route.params.track.previewUrl});
            this.setState({
                previewButton: {
                    icon: "play",
                    text: "Écouter",
                    action: this._playPreview,
                    disabled: false,
                    loading: false
                }
            })
        }
        catch(error) {
            console.warn(error);
        }
    }

    _playPreview = async () => {

        try {
            await this.audioPreview.setIsLoopingAsync(true);
            await this.audioPreview.playAsync();
            this.setState({
                previewButton: {
                    icon: "pause",
                    text: "Arrêter",
                    action: this._pausePreview,
                    disabled: false,
                    loading: false
                }
            })
        } catch (error) {
            console.warn(error);
        }
    }

    _pausePreview = async () => {
        try {
            await this.audioPreview.pauseAsync();
            this.setState({
                previewButton: {
                    icon: "play",
                    text: "Écouter",
                    action: this._playPreview,
                    disabled: false,
                    loading: false
                }
            })
        }
        catch(error){
            console.warn(error);
        }
    }

    _stopPreview = async () => {
        try {
            const status = await this.audioPreview.getStatusAsync();
            if(status.isPlaying) await this.audioPreview.stopAsync();
        }   
        catch(error) {
            console.warn(error);
        }
    }

    _toggleFavorites = () => {
        if(this.state.infavorites){
            Alert.alert(
                "",
                "Êtes-vous sûr de vouloir supprimer de vos favoris ?",
                [
                    {
                        text: "Oui",
                        onPress: () => {
                            const action = {type: "REMOVE_FAVORITE", value: this.props.route.params.track};
                            this.props.dispatch(action);
                            this.setState(
                                {
                                    favorites: {
                                        title: "Ajouter aux favoris",
                                        color: "#8cb6e6",
                                        action: this._toggleFavorites
                                    },
                                    infavorites: false
                                }
                            );
                        }
                    },
                    {
                        text: "Annuler"
                    }
                ]
            );
        }
        else {
            const action = {type: "ADD_FAVORITE", value: this.props.route.params.track};
            this.props.dispatch(action);
            this.setState(
                {
                    favorites: {
                        title: "Retirer des favoris",
                        color: "#fff",
                        action: this._toggleFavorites
                    },
                    infavorites: true
                }
            );
        }
    }

    _getFavoriteColor = () => {
        if(this.state.infavorites){
            return "#fff";
        }
        else {
            return "#8cb6e6"
        }
    }

    state = {
        previewButton: {
            icon: "play",
            text: "Écouter",
            action: this._playPreview,
            disabled: true,
            loading: true
        },
        favorites: {
            title: "Ajouter aux favoris",
            color: "#8cb6e6",
            action: this._toggleFavorites
        },
        infavorites: false
    }

    _rateTrack = (value) => {
        const action = {type: "RATE_FAVORITE", value: {track: this.props.route.params.track, rate: value}}
        this.props.dispatch(action);
        this.setState(
            {
                favorites: {
                    title: "Retirer des favoris",
                    color: "#fff",
                    action: this._toggleFavorites
                },
                infavorites: true
            }
        )
    }

    render(){
        const track = this.props.route.params.track;
        this.props.navigation.setOptions(
            { 
                title: track.trackName+" - "+track.artistName
            }
        );
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: track.artworkUrl100 }}
                        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }}
                    />
                    <View>
                        <Text h3 style={styles.trackName}>{track.trackName} - {track.artistName}</Text>
                    </View>
                </View>
                <View>
                    <Button
                        icon={{
                            name: this.state.previewButton.icon,
                            size: 15,
                            type: "font-awesome",
                            color: "white"
                        }}
                        title={this.state.previewButton.text}
                        onPress={this.state.previewButton.action}
                        disabled={this.state.previewButton.disabled}
                        loading={this.state.previewButton.loading}
                        style={{margin:5}}
                    />

                    <Button
                        icon={{
                            name: "star",
                            size: 18,
                            type: "font-awesome",
                            color: this._getFavoriteColor()
                        }}
                        title={this.state.favorites.title}
                        style={{margin:5}}
                        onPress={this.state.favorites.action}
                    />

                    <AirbnbRating
                    value={this.state.rating}
                    count={5}
                    reviews={["Nul", "Mauvais", "Moyen", "Bon", "Très Bon"]}
                    defaultRating={track.rate ? track.rate : 0}
                    size={20}
                    onFinishRating={(val) => {this._rateTrack(val)}}
                    />

                </View>
            </View>
        );  
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    trackName: {
        textAlign: "center"
    }
});

function mapStateToProps(state){
    return {favorites : state.favorites};
}
export default connect(mapStateToProps)(trackSingle);