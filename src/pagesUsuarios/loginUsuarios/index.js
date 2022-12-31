import React, { useState } from "react";
import {
    Alert,
    Button,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { firebase } from "../../service/Firebase";
import {
    AreaEntradaFormulario,
    BotaoCriarConta,
    BotaoEsquenceuSenhar,
    Botaologin,
    EntradaFormulario,
    TelaBotoes,
    TextoEsquenceuSenhar,
    TextoLogin,
} from "./Estilo";
const auth = firebase.auth();
export default function LoginUsuarios({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const fazerConta = () => {
        navigation.navigate("CadastroUsuarios");
    };
    const EsqueceuSenhar = () => {
        navigation.navigate("RecuperaSenhar");
    };
    const onLoginPress = () => {
        if (email === "" || senha === "") {
            Alert.alert("Atenção", "Preenchar todos os dados");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then((response) => {
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection("usuario");
                usersRef
                    .doc(uid)
                    .get()
                    .then((firestoreDocument) => {
                        if (!firestoreDocument.exists) {
                            alert("O usuário não existe mais.");
                            return;
                        }
                    })
                    .catch((error) => {
                        alert(error);
                    });
            })
            .catch((error) => {
                console.log("ResetPassword: erro em Recupera Senhar:" + error);
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
                }
            });
    };

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            {loading ? (
                <View>
                    <ActivityIndicator
                        animating={loading}
                        color="blue"
                        size="large"
                        style={styles.carregamento}
                    />
                    <Text style={styles.TextoLoading}>Loading... </Text>
                </View>
            ) : (
                <>
                    <View style={styles.Container}>
                        <Image
                            source={require("../../../assets/logo.png")}
                            resizeMode="center"
                            style={styles.Img}
                        />
                        <Text style={styles.Titulo}>
                            Seja bem-vindo {"(a)"}
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
                            <TextoEsquenceuSenhar>
                                Criar uma conta
                            </TextoEsquenceuSenhar>
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
                </>
            )}
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
        marginVertical: 20,
        marginTop: -1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
    },
    itemText: {
        color: "#fff",
        fontSize: 24,
    },
    carregamento: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 500,
        marginVertical: 10,
        marginTop: -7,
        backgroundColor: "#fff",
    },
    TextoLoading: {
        fontSize: 20,
        fontWeight: "500",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -200,
        paddingLeft: 140,
        color: "blue",
    },
});
