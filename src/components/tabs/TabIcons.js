import React from 'react';
import {
    Text,
    View,
} from 'react-native';


const TabIcon = (props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: props.focused ? 'black' : 'black',

        }}>
            <Text
                style={{
                    color: props.focused ? 'tomato' : 'white',
                    fontFamily: 'Helvetica',
                    fontSize: 14}}
            >
                {props.title}
            </Text>
        </View>
    );
};

export default TabIcon;