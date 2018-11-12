import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Button extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '90%',
                        height: 55,
                        backgroundColor: 'black',
                        borderRadius: 50,
                        marginTop: 10,
                        marginBottom: 10,

                    }}>
                    <Text style={{color: 'white'}}>
                        {this.props.title.toUpperCase()}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}