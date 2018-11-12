/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    StatusBar,
    TextInput
} from 'react-native';
import {ActionConst, Actions} from "react-native-router-flux/";
import * as firebase from 'firebase';
import NavBar from './../components/NavBar';
import Button from './../components/Button';

const avatar = 'https://pp.userapi.com/c841532/v841532476/2c3d1/AZAzTfZcgH0.jpg';

export default class Profile extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            displayName: null,
            avatarImageSource: null,
            lastLoginAt: null,
            displayNameChanged: null
        }
    }

    componentDidMount(){
        let user = firebase.auth().currentUser;
        console.log(`[Profile.js] -> ${JSON.stringify(user.user)}`);
        this.setState({
            email: user.email,
            displayName: user.displayName,
            avatarImageSource: user.photoURL,
            lastLoginAt: '[eq'
        });
    }

    logout = () => {
        firebase.auth().signOut()
            .then(()=> {
                Actions.Auth({type: ActionConst.RESET});
            }, error => {
                // An error happened.
            });
    };

    updateProfile = (displayNameChanged) => {
        let user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: displayNameChanged,
            }).then(()=> {
                this.setState({displayName: displayNameChanged})
            }).catch(error => {
                // An error happened.
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <NavBar title={'Профиль'}/>
                <View style={{
                    marginTop: 20,
                    alignItems: 'center'
                }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                        }}
                        source={{uri: `${this.state.avatarImageSource}`}}
                    />
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <Text style={styles.welcome}>
                        Welcome {this.state.displayName}!
                    </Text>
                    <Text>
                        E-mail:
                        <Text style={{color: 'tomato'}}>{' '}{this.state.email}</Text>
                    </Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <TextInput
                        style={{
                            height: 40,
                            width: '75%',
                            borderColor: 'gray',
                            borderBottomWidth: 1,
                            marginBottom: 20,
                            marginLeft: 20
                        }}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        placeholder={'Изменить имя'}
                        onChangeText={(displayNameChanged) => this.setState({displayNameChanged})}
                        value={this.state.displayNameChanged}
                    />
                    <TouchableOpacity onPress={()=> this.updateProfile(this.state.displayNameChanged)}>
                        <Text>Изменить</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    onPress={this.logout}
                    title={'Выход'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      //  alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
