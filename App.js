/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
    Scene,
    Router,
    Overlay,
    Tabs,
    Stack,
} from 'react-native-router-flux';
import Auth from './src/screens/Auth';
import News from './src/screens/News';
import Music from './src/screens/Music';
import Concerts from './src/screens/Concerts';
import Shop from './src/screens/Shop';
import Profile from './src/screens/Profile';
import TabIcon from './src/components/tabs/TabIcons';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBLm5d7PRXMaW-Kd5nJN2mK8Pi4QI9Ih3s",
    authDomain: "awtgroup-8850d.firebaseapp.com",
    databaseURL: "https://awtgroup-8850d.firebaseio.com",
    projectId: "awtgroup-8850d",
    storageBucket: "awtgroup-8850d.appspot.com",
    messagingSenderId: "487268736527"
};
firebase.initializeApp(firebaseConfig);

const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
    shadowOpacity: 1,
    shadowRadius: 3,
});

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: 'black',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: 'red',
    },
});

export default class App extends Component<Props> {
  render() {
    return (
        <Router
            getSceneStyle={getSceneStyle}
        >
            <Overlay key='overlay'>
                <Stack
                    key='root'
                >
                    <Scene
                        key="Auth"
                        component={Auth}
                        hideNavBar
                    />

                    <Scene hideNavBar panHandlers={null}>
                      <Tabs
                          key='tabbar'
                          swipeEnabled
                          showLabel={false}
                          tabBarStyle={styles.tabBarStyle}
                          activeBackgroundColor="black"
                          inactiveBackgroundColor="black"

                      >
                          <Stack
                              key="tab_1"
                              title="Новости"
                              tabBarLabel="Новости"
                              hideNavBar
                              inactiveBackgroundColor="black"
                              activeBackgroundColor="black"
                              icon={TabIcon}
                          >
                              <Scene
                                  key="tab_1_1"
                                  component={News}
                                  title="Tab #1_1"
                              />
                          </Stack>
                          <Stack
                              key="tab_2"
                              title="Музыка"
                              tabBarLabel="Музыка"
                              hideNavBar
                              inactiveBackgroundColor="#FFF"
                              activeBackgroundColor="#DDD"
                              icon={TabIcon}
                          >
                              <Scene
                                  key="tab_2_1"
                                  component={Music}
                                  title="Tab #2_1"
                              />
                          </Stack>
                          <Stack
                              key="tab_3"
                              title="Магазин"
                              tabBarLabel="Магазин"
                              hideNavBar
                              inactiveBackgroundColor="#FFF"
                              activeBackgroundColor="#DDD"
                              icon={TabIcon}
                          >
                              <Scene
                                  key="tab_3_1"
                                  component={Shop}
                                  title="Tab #3_1"
                              />
                          </Stack>
                          <Stack
                              key="tab_4"
                              title="Профиль"
                              tabBarLabel="Профиль"
                              hideNavBar
                              inactiveBackgroundColor="#FFF"
                              activeBackgroundColor="#DDD"
                              icon={TabIcon}
                          >
                              <Scene
                                  key="tab_4_1"
                                  component={Profile}
                                  title="Tab #4_1"
                              />
                          </Stack>
                      </Tabs>
                    </Scene>
                </Stack>
            </Overlay>
        </Router>
    );
  }
}
