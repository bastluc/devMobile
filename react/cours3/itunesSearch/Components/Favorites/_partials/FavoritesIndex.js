import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import {ListItem} from 'react-native-elements'
import {connect} from "react-redux";

class FavoritesIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView>
                {
                    this.props.favorites.map((t, index) => (
                        <ListItem
                        key={index}
                        title={t.trackName}
                        subtitle={t.artistName}
                        leftAvatar={{ source: {uri: t.artworkUrl60} }}
                        onPress={() => this.props.navigation.navigate('TrackSingle', {track: t})}
                        bottomDivider
                        chevron
                        />
                    ))
                }
            </ScrollView>
        );
    }
}

function mapStateToProps(state){
    return {favorites : state.favorites};
}
export default connect(mapStateToProps)(FavoritesIndex);