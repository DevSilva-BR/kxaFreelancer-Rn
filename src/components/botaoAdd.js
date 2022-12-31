import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function BotaoAdiciona({ size, color }) {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                <Feather name="map" size={24} color="#fff" />{"\n"}
                Map
            </Text>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginBotton: 30
    },
    titulo: {
        color: '#fff'
    }
})
