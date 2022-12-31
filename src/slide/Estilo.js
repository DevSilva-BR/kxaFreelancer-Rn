import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TimePickerAndroid,
    TouchableOpacity,
    View,
} from "react-native";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

export const Estilo = StyleSheet.create({
    Tela: {
        flex: 1,
        backgroundColor: "blue",
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 20,

    },
    logo: {
        width: "80%",
        height: "80%",
        borderRadius: 20,
        backgroundColor: "#fff",
    },
    title: {
        color: "#05375a",
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        color: "grey",
        marginTop: 5,
        fontSize: 15,
        textAlign: 'auto',

    },
    button: {
        alignItems: "flex-start",
        marginTop: 25,
        backgroundColor: "#fff",
        width: 150,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: "center",
        paddingStart: 35,
        marginStart: 160,
        borderColor: "#000cff",
    },
    textSign: {
        color: "#000cff",
        fontWeight: "bold",
        fontSize: 18,
        padding: 6,
    },
});
