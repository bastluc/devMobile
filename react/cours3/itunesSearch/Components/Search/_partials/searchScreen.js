import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Picker } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements'

export default class searchScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        searchQuery: "",
        searchFilter: "allTrack",
        tunes: []
    }

    fetchTunes = async (query) => {
        var query = this.state.searchQuery;
        var filter = this.state.searchFilter;
        if (query.length > 0) {
            try {
                const response = await fetch('https://itunes.apple.com/search?entity=' + filter + '&media=music&term=' + query);
                const result = await response.json();
                this.setState({ tunes: result.results });
            }
            catch (e) {
                console.warn(e);
            }
        }
    }

    _renderListItems = () => {
        return (
            this.state.tunes.map((t, index) => (
                <ListItem
                    key={index}
                    title={t.trackName}
                    subtitle={t.artistName}
                    leftAvatar={{ source: { uri: t.artworkUrl60 } }}
                    onPress={() => this.props.navigation.navigate('track', { track: t })}
                    bottomDivider
                />
            ))
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    onChangeText={(text) => {
                        this.setState({ searchQuery: text }, this.fetchTunes);
                    }
                    }
                    value={this.state.searchQuery}
                    placeholder="Rechercher..."
                />
                <ScrollView style={styles.resultsContainer}>
                    {this._renderListItems()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchContainer: {
        flex: 0.3,
        justifyContent: "center"
    },
    resultsContainer: {
        flex: 0.7
    }
});
