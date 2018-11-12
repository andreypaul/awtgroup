import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class NavBar extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{
                height: 70,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
            }}
            >
                <Text style={{color: 'white', marginTop: 10}}>{this.props.title}</Text>
            </View>
        );
    }
}