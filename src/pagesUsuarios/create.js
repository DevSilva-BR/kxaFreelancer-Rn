import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { AuthContext } from "../auth/Auth";
import { saveMyServicos } from "../service/api";
import { EntradaFormulario, SubTitulo } from "./Estilo";
const servicos = (props) => {
    const { navigation } = props;

    const [mensagem, setMensagem] = useState("");

    const [loading, setLoading] = useState(false);
    const [senha, setSenha] = useState("");
    const [cartegoria, setCartegoria] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairo, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [telefone, setTelefone] = useState("");
    let [user] = useState(AuthContext);
    user = user._currentValue.user;
    let id = user.id;
    let nome = user.nome;
    let address =
        rua + "," + numero + "," + bairo + "," + cidade + "," + estado;
    const create = () => {
        if (!telefone) {
            Alert.alert("Anteção", "Campos Inválidos");
        } else {
            const servicos = {
                telefone,
                address,
                id,
                nome,
                cartegoria,
            };
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 5000);
            saveMyServicos(servicos)
                .then((res) => {
                    console.log(servicos);
                    Alert.alert("a", "Dados Inseridos com Sucesso!");
                })
                .catch((err) => {
                    alert(err);
                });
        }
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
                        marginTop: -1,
                    }}
                >
                    <SubTitulo>Faça sua Conta para Continuar </SubTitulo>

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
                            height: "10%",
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
                            justifyContent: "center",
                        }}
                    >
                        <View style={styles.button2}>
                            <TouchableOpacity onPress={create}>
                                <Text style={styles.textSign2}>Cadastra</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

export default servicos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    caixaTexto: {
        width: "90%",
        borderWidth: 1,
        borderColor: "gray",
        padding: 8,
        marginTop: 10,
        borderRadius: 10,
    },

    caixaTexto2: {
        width: "90%",
        borderWidth: 1,
        borderColor: "gray",
        padding: 8,
        marginTop: 10,
        borderRadius: 10,
    },

    botao: {
        marginTop: 20,
    },
    mensagemErro: {
        marginTop: 10,
        color: "red",
    },
    container2: {
        flex: 1,
    },

    title: {
        color: "#5c8599",
        fontSize: 24,
        fontFamily: "Nunito_700Bold",
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: "#D3E2E6",
    },

    label: {
        color: "#8fa7b3",
        fontFamily: "Nunito_600SemiBold",
        marginBottom: 8,
    },

    comment: {
        fontSize: 11,
        color: "#8fa7b3",
    },

    input: {
        backgroundColor: "#fff",
        borderWidth: 1.4,
        borderColor: "#d3e2e6",
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: "top",
    },

    uploadedImagesContainer: {
        flexDirection: "row",
    },

    uploadedImage: {
        width: 64,
        height: 64,
        borderRadius: 20,
        marginBottom: 32,
        marginRight: 8,
    },

    imagesInput: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderStyle: "dashed",
        borderColor: "#96D2F0",
        borderWidth: 1.4,
        borderRadius: 20,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 32,
    },

    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
        paddingStart: 10,
    },

    nextButton: {
        backgroundColor: "blue",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "10%",
        marginTop: 15,
    },

    nextButtonText: {
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 16,
        color: "#FFF",
    },
    titulo: {
        fontSize: 26,
        marginTop: -50,
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
        marginStart: 6,
        borderColor: "#000cff",
    },
    button2: {
        alignItems: "center",
        marginTop: 5,
        backgroundColor: "#000cff",
        width: 150,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: "center",
        paddingStart: 1,
        alignContent: "center",
    },
    textSign2: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 25,
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
