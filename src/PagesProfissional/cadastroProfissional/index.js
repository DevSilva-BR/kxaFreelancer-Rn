import React, { useState } from "react";
import {
    Alert,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet,
} from "react-native";
import { firebase } from "../../service/Firebase";
import { BotaoCadastra, EntradaFormulario, SubTitulo, Titulo } from "./Estilo";
import { Picker } from "@react-native-picker/picker";
import { ActivityIndicator } from "react-native-paper";
import ValidaCnpj from "../../utils/index";
const auteticacao = firebase.auth();
export default function CadastroProfissional({ navigation }) {
    const [cnpj, setCnpj] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState("");
    const [cartegoria, setCartegoria] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairo, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [telefone, setTelefone] = useState("");
    const [loading, setLoading] = useState(false);

    const fazerLogin = () => {
        navigation.navigate("Login");
    };
    const fazerConta = () => {
        if (nome === "" || email === "" || senha === "") {
            Alert.alert("Atenção", "Preencha todos os campos.");
            return;
        }

        let address =
            rua + "," + numero + "," + bairo + "," + cidade + "," + estado;
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
                    cnpj,
                    nome,
                    senha,
                    cartegoria,
                    address,
                    telefone,
                };
                const usersRef = firebase
                    .firestore()
                    .collection("profissional");
                usersRef
                    .doc(uid)
                    .set(data)
                    .catch((error) => {
                        alert("Error!", error);
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
                    <Text style={styles.TextoLoading}>Loading...</Text>
                </View>
            ) : (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 5,
                    }}
                >
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
                        placeholder="CNPJ"
                        keyboardType="number-pad"
                        value={cnpj}
                        onChangeText={(text) => setCnpj(text)}
                    />
                    <EntradaFormulario
                        secureTextEntry
                        placeholder="Senha"
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        autoCapitalize="none"
                    />

                    <EntradaFormulario
                        placeholder="Informe sua rua"
                        value={rua}
                        onChangeText={(text) => setRua(text)}
                    />
                    <EntradaFormulario
                        placeholder="Informe sua numero"
                        value={numero}
                        onChangeText={(text) => setNumero(text)}
                    />

                    <EntradaFormulario
                        placeholder="Informe seu Bairro"
                        value={bairo}
                        onChangeText={(text) => setBairro(text)}
                    />
                    <EntradaFormulario
                        placeholder="Informe sua Cidade"
                        value={cidade}
                        onChangeText={(text) => setCidade(text)}
                    />
                    <EntradaFormulario
                        placeholder="Informe seu seu Estado"
                        value={estado}
                        onChangeText={(text) => setEstado(text)}
                    />
                    <EntradaFormulario
                        placeholder="Informe seu Telefone"
                        value={telefone}
                        onChangeText={(text) => setTelefone(text)}
                    />
                    <View
                        style={{
                            width: "90%",
                            height: "8%",
                            marginBottom: 10,
                            fontSize: 14,
                            borderWidth: 1,
                            borderColor: "blue",
                            padding: 5,
                            borderRadius: 10,
                            marginTop: -5,
                        }}
                    >
                        <Picker
                            selectedValue={cartegoria}
                            onValueChange={(itemValue, itemIndex) =>
                                setCartegoria(itemValue)
                            }
                        >
                            <Picker.Item
                                label="Assistência técnica - informática"
                                value="Assistência técnica - informática"
                            />
                            <Picker.Item
                                label="Assistência técnica - Eletrodomésticos"
                                value="Assistência técnica - Eletrodomésticos"
                            />
                            <Picker.Item
                                label="Aulas - Historia"
                                value="Aulas - Historia"
                            />
                            <Picker.Item
                                label="Aulas - português"
                                value="Aulas - português"
                            />
                            <Picker.Item
                                label="Consultoria - Administração de Condomínios"
                                value="Consultoria - Administração de Condomínios"
                            />
                            <Picker.Item
                                label="Consultoria - Administração de Imóveis"
                                value="Consultoria - Administração de Imóveis"
                            />
                            <Picker.Item
                                label="Design - Animação (Motion)"
                                value="Design - Animação (Motion)"
                            />
                            <Picker.Item
                                label="Tecnologia - Desenvolvimento de Sites"
                                value="Tecnologia - Desenvolvimento de Sites"
                            />
                        </Picker>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            padding: 1,
                        }}
                    >
                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={fazerConta}
                            >
                                <Text style={styles.textSign}>Cadastra-se</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button2}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("LoginProfissional")
                                }
                            >
                                <Text style={styles.textSign2}>
                                    Ja Tenho Conta
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
