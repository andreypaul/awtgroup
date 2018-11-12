import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class NavBar extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.container}>
                <Image source={require('./../../assets/img/logo.png')} style={styles.logo}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    logo: {
        width: 203/3,
        height: 106/3
    },
    text: {
        color: 'black',
        marginTop: 10
    }
});