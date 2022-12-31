import React, { useEffect, useState } from "react";
import {
    FlatList,
    Linking,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Titulo } from "./Estilo";
import New, { Socio2, Socio3, Socio4 } from "../../components/cardNew";
import Header from "../../components/Header";
import { getMyProfissional } from "../../service/api";

function PaginaInicialProfissional(props) {
    const { navigation } = props;
    const [works, setWorks] = useState([]);
    const [key, setKey] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [cartegoria, setCartegoria] = useState("");
    const [servicos, setServicos] = useState([]);
    const [mobileNumber, setMobileNumber] = useState("");
    const [whatsAppMsg, setWhatsAppMsg] = useState(
        "Please follow https://aboutreact.com"
    );
    const getAllServicos = () => {
        getMyProfissional()
            .then((retorno) => {
                setServicos(retorno);
            })
            .catch((erro) => console.log(erro));
    };
    const initiateWhatsApp = () => {
        let url = "whatsapp://send?text=" + whatsAppMsg + "&phone=" + telefone;
        Linking.openURL(url)
            .then(() => {
                console.log("WhatsApp Aberto");
            })
            .catch(() => {
                alert(
                    "Verifique se o Whatsapp está instalado no seu dispositivo"
                );
            });
    };
    useEffect(() => {
        getAllServicos();
    }, []);
    return (
        <View style={{ backgroundColor: "#fff" }}>
            <Header />
            <StatusBar
                backgroundColor="blue"
                barStyle="dark-content"
                translucent={false}
            />

            <TouchableOpacity
                style={styles.BotaoAdiciona}
                onPress={() => navigation.navigate("servicos")}
            >
                <Text style={styles.TextoBotao}>+</Text>
            </TouchableOpacity>
            <View>
                <Titulo> Profissionais perto de voce </Titulo>
                <Text>{mensagem}</Text>
                <FlatList
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled={false}
                    data={servicos}
                    style={styles.lista}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setKey(item.key);
                                setNome(item.nome);
                                setEndereco(item.endereco);
                                setTelefone(item.telefone);
                                setCartegoria(item.cartegoria);
                                initiateWhatsApp();
                            }}
                        >
                            <View style={styles.container}>
                                <View style={styles.content}>
                                    <View style={styles.dot}></View>
                                    <Text style={styles.badge}>
                                        {item.cartegoria}
                                    </Text>
                                    <Text style={styles.description}>
                                        {item.nome}
                                    </Text>
                                    <Text style={styles.description2}>
                                        {item.telefone}
                                    </Text>
                                    <Text style={styles.price}>
                                        {item.address}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

export default PaginaInicialProfissional;

const styles = StyleSheet.create({
    containe: {
        flex: 1,
        backgroundColor: "#fff",
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        width: 100,
        height: 1000,
    },
    lista: {
        height: "50%",
        width: "100%",
        padding: 1,
        marginTop: 20,
        paddingHorizontal: 5,
        backgroundColor: "#ffff",
    },
    ccontainer: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    price: {
        paddingHorizontal: 30,
        fontSize: 10,
        color: "#000",
    },
    description: {
        paddingHorizontal: 20,
        color: "#000",
        fontSize: 14,
        lineHeight: 20,
        marginTop: 10,
    },
    description2: {
        paddingHorizontal: 2,
        color: "#000",
        fontSize: 12,
        lineHeight: 20,
        marginTop: -3,
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
    container: {
        flexDirection: "row",
        width: 320,
        height: 90,
        backgroundColor: "#FFF",
        elevation: 2,
        padding: 6,
        marginVertical: 1,
        marginRight: 50,
        marginLeft: 15,
        borderRadius: 10,
    },
    image: {
        borderRadius: 10,
        width: 60,
        height: 60,
    },
    content: {
        width: "100%",
        justifyContent: "flex-end",
        paddingHorizontal: 10,
        height: "100%",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 12,
        color: "#4f4a4a",
        marginStart: 1000,
    },
    description: {
        fontSize: 9,
        color: "black",
    },
    price: {
        fontSize: 12,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: "red",
        marginHorizontal: 4,
    },
    badge: {
        color: "red",
        fontSize: 10,
    },
    container2: {
        marginTop: 20,
        width: "40%",
        height: "20%",
        padding: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "red",
    },
    BotaoAdiciona: {
        position: "relative",
        width: 40,
        height: 40,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: "flex-start",
        padding: 10,
        marginLeft: "80%",
        marginBottom: -40,
        borderColor: "#871cff",
    },
    TextoBotao: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 25,
        marginTop: -10,
    },
});
