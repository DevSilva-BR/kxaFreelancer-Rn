import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AuthContext} from "../../auth/Auth";

const statusBarHeight = StatusBar.currentHeight
    ? (StatusBar.currentHeight = 22)
    : 64;

export default function Header({ navigation }) {
    let [user] = useState(AuthContext);
    user = user._currentValue.user;
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>Bem vindo {user.nome} </Text>

                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.buttonUser}
                >
                    <Feather name="user" size={27} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart: 5,
        paddingEnd: 10,
        paddingBottom: 5,
    },
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 1,
        marginTop: 1,
        paddingLeft: 1,
    },
    username: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        padding: 1,
        marginBottom: 10,
        paddingStart: 10,
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: "#8d9293",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2,
        marginBottom: 10,
        marginTop: 1,
    },
});
