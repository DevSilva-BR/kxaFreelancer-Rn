import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { firebase } from "../../service/Firebase";
import {
    BotaoCadastra,
    EntradaFormulario,
    SubTitulo,
    Tela,
    Titulo,
} from "./Estilo";
const auteticacao = firebase.auth();
//import { ValidaCpf } from "../../utils";

export default function CadastroUsuarios({ navigation }) {
    //formulario de cadastro

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confimarSenhar, setConfimarSenhar] = useState("");
    const [CPF, setCPF] = useState("");
    const [loading, setLoading] = useState(false);

    //
    const fazerLogin = () => {
        navigation.navigate("LoginUsuarios");
    };
    /*if (!ValidaCpf(CPF)) {
        return Alert.alert(
            "CPF inválido!",
            "O CPF deve conter apenas numeros!"
        );
    }*/
    const fazerConta = () => {
        if (senha !== confimarSenhar) {
            Alert.alert("Atenção", "As senhas não coincidem.");
            return;
        }
        if (
            nome === "" ||
            email === "" ||
            senha === "" ||
            confimarSenhar === "" ||
            CPF == ""
        ) {
            Alert.alert("Atenção", "Preencha todos os campos.");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
        auteticacao
            .createUserWithEmailAndPassword(email, senha)
            .then((response) => {
                const uid = response.user.uid;
                const data = {
                    id: uid,
                    email,
                    nome,
                    senha,
                    CPF,
                };
                const usersRef = firebase.firestore().collection("usuario");
                usersRef
                    .doc(uid)
                    .set(data)
                    .catch((error) => {
                        alert("Error!", error);
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
                    case "auth/email-already-in-use":
                        Alert.alert("Atenção", "Email Ja cadastrando.");
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
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 15,
                    }}
                >
                    <Titulo>Criar Nova conta </Titulo>
                    <SubTitulo>Faça sua Conta para Continuar </SubTitulo>

                    <EntradaFormulario
                        placeholder="Nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                    <EntradaFormulario
                        placeholder="email@email.com"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <EntradaFormulario
                        secureTextEntry
                        placeholder="Senha"
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        autoCapitalize="none"
                    />

                    <EntradaFormulario
                        secureTextEntry
                        placeholder="Confirmar Senha"
                        onChangeText={(text) => setConfimarSenhar(text)}
                        value={confimarSenhar}
                        autoCapitalize="none"
                    />
                    <EntradaFormulario
                        placeholder="Digitel seu CPF"
                        onChangeText={(numero) => setCPF(numero)}
                        keyboardType="number-pad"
                        value={CPF}
                        autoCapitalize="none"
                    />
                    <BotaoCadastra onPress={fazerConta}>
                        <Text style={{ color: "#fff", fontSize: 20 }}>
                            Cadastra
                        </Text>
                    </BotaoCadastra>
                    <TouchableOpacity onPress={fazerLogin}>
                        <Text>Já tenho uma conta.</Text>
                    </TouchableOpacity>
                </View>
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
    button: {
        alignItems: "flex-start",
        marginTop: 5,
        backgroundColor: "#fff",
        width: 150,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: "center",
        paddingStart: 10,
        marginStart: 5,
        borderColor: "#000cff",
    },
    button2: {
        alignItems: "flex-start",
        marginTop: 5,
        backgroundColor: "#000cff",
        width: 150,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: "center",
        paddingStart: 10,
        alignContent: "center",
        marginLeft: 40,
    },
    textSign: {
        color: "#000cff",
        fontWeight: "bold",
        fontSize: 16,
        padding: 6,
    },
    textSign2: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});
