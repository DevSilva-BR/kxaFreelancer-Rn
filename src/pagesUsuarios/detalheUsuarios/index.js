import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import {Feather, Ionicons} from '@expo/vector-icons';

export default function Detalhe() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <Text style={styles.house}>Como funciona o aplicativo</Text>
            </View>
            <Text style={styles.description}>
                Lacinia purus nostra suscipit dignissim ac aenean proin. Conubia
                eget rhoncus integer torquent luctus. Hendrerit cubilia ornare
                sit habitant pede laoreet tellus scelerisque. Suspendisse libero
                blandit ornare bibendum eget nullam finibus dui donec litora.
                Cubilia urna ac tincidunt lacinia habitant netus.
            </Text>
        </View>
    );
}
export function Socio2() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <Text style={styles.house}>Como funciona o aplicativo</Text>
            </View>
            <Text style={styles.description}>
                Lacinia purus nostra suscipit dignissim ac aenean proin. Conubia
                eget rhoncus integer torquent luctus. Hendrerit cubilia ornare
                sit habitant pede laoreet tellus scelerisque. Suspendisse libero
                blandit ornare bibendum eget nullam finibus dui donec litora.
                Cubilia urna ac tincidunt lacinia habitant netus.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    swiperContent: {
        flexDirection: "row",
        height: 340,
        width: "100%",
    },
    headerContent: {
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
    },
    house: {
        fontSize: 18,
        color: "#4f4a4a",
    },
    rating: {
        fontSize: 9,
        color: "#4f4a4a",
    },
    price: {
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#000",
    },
    description: {
        paddingHorizontal: 20,
        color: "#b3aeae",
        fontSize: 14,
        lineHeight: 20,
        marginTop: 20,
    },
    slide: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#010101",
        height: 90,
        height: 90,
        borderRadius: 8,
        marginRight: 20,
    },
});
