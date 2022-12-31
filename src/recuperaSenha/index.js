import React, { useState } from "react";
import { Text, StyleSheet, TextInput } from "react-native";
import {
    Tela,
    Titulo,
    BotaoRecuperar,
    ButtonText,
    SubTitulo,
    TextoRecuperar,
} from "./style";
import { Alert } from "react-native";

import { firebase } from "../../src/service/Firebase";
const auth = firebase.auth();

export default function RecuperaSenhar({ navigation }) {
    const [email, setEmail] = useState("");

    const login = () => {
        navigation.navigate("Login");
    };

    const Recupera = () => {
        if (email === "") {
            Alert.alert("Recuperar senhar", "Por favor, informe seu e-mail.");
        }
        auth.sendPasswordResetEmail(email)
            .then((r) => {
                Alert.alert(
                    "Anteção",
                    "Enviamos um email de recuperação de senha para o seguinte endereço: \n" +
                        email
                );
                setTimeout(() => {
                    navigation.navigate("Slide");
                }, 5000);
            })
            .catch((e) => {
                console.log("ResetPassword: erro em RecuperaSenhar:" + e);
                switch (e.code) {
                    case "auth/user-not-found":
                        Alert.alert("Error", "Usuario Nâo Cadastrado.");
                        break;
                    case "auth/wrong-password":
                        Alert.alert("Error", "Usuário desabilitado.");
                        break;
                    case "auth/invalid-email":
                        Alert.alert("Error", "Email invalido.");
                        break;
                    case "auth/missing-email":
                        Alert.alert("Error", "Email aaaaaaaaaaaa.");
                        break;
                    case "auth/too-many-requests":
                        Alert.alert(
                            "atenção houve um erro.",
                            "tente novamente mais tarde."
                        );
                        setTimeout(() => {
                            navigation.navigate("Slide");
                        }, 3000);
                        break;
                }
            });
    };

    return (
        <Tela>
            <Titulo>Recuperação de conta</Titulo>
            <SubTitulo>Nova senha</SubTitulo>
            <TextInput
                style={[styles.container, styles.input, styles.description]}
                placeholder="email@email.com"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <BotaoRecuperar onPress={() => Recupera()}>
                <TextoRecuperar>enviar</TextoRecuperar>
            </BotaoRecuperar>
        </Tela>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginVertical: 1,
    },
    input: {
        borderBottomWidth: 1,
        height: 60,
        marginBottom: 1,
        fontSize: 14,
        bottom: "1%",
        alignItems: "center",
        justifyContent: "flex-end",
        borderWidth: 1,
        borderColor: "blue",
        //borda a direita
        paddingStart: "10%",
        paddingEnd: "10%",
        borderRadius: 15,
        marginTop: 40,
    },
    description: {
        fontSize: 19,
        color: "black",
        paddingTop: 2,
    },
});
