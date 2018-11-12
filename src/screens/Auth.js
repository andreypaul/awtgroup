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
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';
import NavBar from './../components/NavBar';
import Button from "../components/Button";
const IsLoadingView = () => {
        return(
            <View style={{
                flex: 1,
                zIndex: 1,
                width: '100%',
                height: '100%',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }}>
                <ActivityIndicator color={'white'}/>
                <Text style={{color: 'white'}}>Загрузка...</Text>
            </View>
        );
};

export default class Auth extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoadingData: null,
        }
    }

    componentDidMount(){
        this.onAuthStateChanged();
    }

    onAuthStateChanged = ()=> {
        this.setState({isLoadingData: true});
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({isLoadingData: false});
                console.log(`User is signed in -> ${JSON.stringify(user)}`);
                Actions.tabbar();
            } else {
                this.setState({isLoadingData: false});
                console.log(`No user is signed in. -> ${JSON.stringify(user)}`);
            }
        });
    };

    signIn = (email, password) => {
        console.log(`sign in with email: ${email} and password: ${password}`);
        this.setState({isLoadingData: true});
        try {
            if (password.length<6) {
                this.setState({isLoadingData: false});
                alert(`Пароль должен содержать более 6 символов`);
                return;
            }
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    this.setState({isLoadingData: false});
                    Actions.tabbar();
                })
                .catch(e => {
                    this.setState({isLoadingData: false});
                    alert(`${e}`);
                })
        }
        catch (e) {
            this.setState({isLoadingData: false});
            alert(`Ошибка!`);
          //throw new Error();
        }
    };

    signUp = (email, password) => {
        console.log(`sign up with email: ${email} and password: ${password}`);
        this.setState({isLoadingData: true});
        try {
            if (password.length<6) {
                this.setState({isLoadingData: false});
                alert(`Пароль должен содержать более 6 символов`);
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user => {
                    this.setState({isLoadingData: false});
                    alert(`Пользователь успешно создан`);
                })
                .catch(e => {
                    this.setState({isLoadingData: false});
                    alert(`${e}`);
            })
        }
        catch (e) {
            this.setState({isLoadingData: false});
            console.log(e.toString());
        }
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {this.state.isLoadingData? <IsLoadingView/> : null}
                <TextInput
                    style={{
                        height: 40,
                        width: '90%',
                        borderColor: 'gray',
                        borderBottomWidth: 1,
                        marginLeft: 20,
                        marginBottom: 20,
                    }}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholder={'email'}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={{
                        height: 40,
                        width: '90%',
                        borderColor: 'gray',
                        borderBottomWidth: 1,
                        marginLeft: 20,
                        marginBottom: 20,
                    }}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    placeholder={'password'}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <Button onPress={() => this.signIn(this.state.email, this.state.password)}
                        title={'Войти'}
                />
                <Button onPress={() => this.signUp(this.state.email, this.state.password)}
                        title={'Зарегистрироваться'}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       // alignItems: 'center',
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
