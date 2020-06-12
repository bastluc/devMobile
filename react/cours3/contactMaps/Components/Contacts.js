import React from 'react';
import {ScrollView, Text} from 'react-native'
import { ListItem } from 'react-native-elements'
import * as Contact from 'expo-contacts'

export default class Contacts extends React.Component {

    state = {
        contacts: []
    };

    getContacts = async () => {
        try {
            await Contact.requestPermissionsAsync();
            let data = await Contact.getContactsAsync();
            this.setState({contacts: data.data});
        }
        catch(e){
            console.log(e);
        }
    };

    componentDidMount(){
        this.getContacts();
    }

    render(){
        return(
            <ScrollView>
                {
                    this.state.contacts.map((c, index) => (
                        <ListItem
                            key={index}
                            title={c.name}
                            bottomDivider
                        />
                    ))
                }
            </ScrollView>
        )
    }
}