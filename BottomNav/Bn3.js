import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

export default function Bn3({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('bn2');
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Profile
        </Text>
            {/* <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Go to Screen B
          </Text>
            </Pressable> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
        
    }
})