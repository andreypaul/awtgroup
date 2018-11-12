import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';


const TabIcon = (props) => {
    console.log(`====>>>>> ${JSON.stringify(props)}`);
    return (
        <View style={styles.container}>
            <Image source={props.icon} style={styles.icons}/>
            <Text style={[styles.text,{color: props.focused ? 'black' : 'gray',}]}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
    },
    icons: {
      width: 24,
      height: 24
    },
    text: {
        fontFamily: 'Helvetica',
        fontSize: 12
    }
});

export default TabIcon;