import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, Image, Alert } from "react-native";
import {
    AreaEntradaFormulario,
    BotaoCriarConta,
    BotaoEsquenceuSenhar,
    Botaologin,
    EntradaFormulario,
    FundoTela,
    Logo,
    SubTitulo,
    Tela,
    TelaBotoes,
    TextoEsquenceuSenhar,
    TextoLogin,
    Titulo,
    LogoArea,
} from "./Estilo";
import { firebase } from "../../service/Firebase";
const auth = firebase.auth();

export default function LoginProfissional({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const fazerConta = () => {
        navigation.navigate("CadastroProfissional");
    };

    const EsqueceuSenhar = () => {
        navigation.navigate("RecuperaSenhar");
    };

    const onLoginPress = () => {
        if (email === "" || senha === "") {
            Alert.alert("Atenção", "Preenchar todos os dados");
            return;
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(email, setSenha)
            .then((response) => {
                const uid = response.user.uid;
                const usersRef = firebase
                    .firestore()
                    .collection("profissional");
                usersRef
                    .doc(uid)
                    .get()
                    .then((firestoreDocument) => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.");
                            return;
                        }
                    })
                    .catch((error) => {
                        alert(error);
                    });
            })
            .catch((error) => {
                console.log("ResetPassword: erro em RecuperaSenhar:" + error);
                switch (error.code) {
                    case "auth/user-not-found":
                        Alert.alert("Atenção", "Usuario Nâo Cadastrado.");
                        break;
                    case "auth/wrong-password":
                        Alert.alert("Atenção", "Usuário desabilitado.");
                        break;
                    case "auth/invalid-email":
                        Alert.alert("Atenção", "Email invalido.");
                        break;
                    case "auth/internal-error":
                        Alert.alert("Atenção", "Email invalido.");
                        break;
                }
            });
    };

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={styles.Container}>
                <Image
                    source={require("./logo2.png")}
                    resizeMode="center"
                    style={styles.Img}
                />
                <Text style={styles.Titulo}>
                    Seja bem-vindo {"(a)"} Profissional pro
                </Text>
                <Text style={styles.SubTitulo}>
                    faça o login para continuar.
                </Text>
            </View>
            <AreaEntradaFormulario>
                <EntradaFormulario
                    placeholder="Digite seu Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <EntradaFormulario
                    placeholder="Digite sua Senha"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    secureTextEntry={true}
                />
            </AreaEntradaFormulario>
            <TelaBotoes>
                <BotaoEsquenceuSenhar onPress={EsqueceuSenhar}>
                    <TextoEsquenceuSenhar>
                        Esqueceu a Senha?
                    </TextoEsquenceuSenhar>
                </BotaoEsquenceuSenhar>

                <BotaoCriarConta
                    style={{
                        paddingLeft: 80,
                    }}
                    onPress={fazerConta}
                >
                    <TextoEsquenceuSenhar>Criar uma conta</TextoEsquenceuSenhar>
                </BotaoCriarConta>
            </TelaBotoes>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Botaologin onPress={onLoginPress}>
                    <TextoLogin>Acessar</TextoLogin>
                </Botaologin>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    Titulo: {
        fontSize: 20,
        marginVertical: 20,
        margin: 1,
        marginTop: -16,
        bottom: 1,
        padding: 1,
    },
    SubTitulo: {
        fontSize: 18,
        marginVertical: 10,
        margin: 15,
        marginTop: -15,
    },
    Img: {
        width: "100%",
        height: 250,
        marginVertical: 10,
        marginTop: -7,
    },
});
