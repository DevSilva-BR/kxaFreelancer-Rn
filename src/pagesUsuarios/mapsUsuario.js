import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert,
    TouchableOpacity,
    TextInput,
    Button,
    KeyboardAvoidingView,
    SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getMyServicos } from "../service/api";

const MapsUsuario = (props) => {
    const { navigation } = props;

    const [pesquisatxt, setPesquisaTxt] = useState("");
    const [pesquisa, setPesquisa] = useState(null);
    const [myPosition, seMyposition] = useState(null);
    // Posição da IMED
    const [localicaoAtual, setLocalicaoAtual] = useState({
        latitude: -22.3739486,
        longitude: -46.93821012,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const [localizacoes, setLocalizacoes] = useState([]);

    const getMyPosition = async () => {
        let { status } = await Location.requestPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permissão de acesso a localização negado!");
        } else {
            await Location.getCurrentPositionAsync({})
                .then((retorno) => seMyposition(retorno.coords))
                .catch((error) => Alert.alert("Erro ao acessar o GPS!"));
        }
    };

    const pesquisaLatLong = async (endereco) => {
        return await Location.geocodeAsync(endereco)
            .then((resultado) => {
                return {
                    latitude: resultado[0].latitude,
                    longitude: resultado[0].longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                };
            })
            .catch((erro) => console.log(erro));
    };

    useEffect(() => {
        getMyPosition();
        var servicosOnMap = [];
        getMyServicos().then(async (res) => {
            res.map(async (servicos) => {
                await pesquisaLatLong(servicos.address).then(
                    (localizationOfUser) => {
                        const teste = {
                            localicacao: {
                                latitude: localizationOfUser.latitude,
                                longitude: localizationOfUser.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            },
                            title: servicos.nome,
                            description: servicos.cartegoriaSelecionada,
                        };
                        servicosOnMap.push(teste);
                    }
                );
            });
            setLocalizacoes(servicosOnMap);
        });
        console.log("local:", localizacoes);
    }, []);

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <TextInput
                        style={styles.caixaTexto}
                        placeholder="Informe o local"
                        value={pesquisatxt}
                        onChangeText={(text) => setPesquisaTxt(text)}
                    />

                    <MapView
                        style={styles.mapStyle}
                        initialRegion={localicaoAtual}
                        region={localicaoAtual}
                    >
                        {localizacoes.map((item, key) => (
                            <Marker
                                key={key}
                                coordinate={item.localicacao}
                                title={item.title}
                                description={item.description}
                            />
                        ))}

                        {myPosition ? (
                            <Marker
                                coordinate={myPosition}
                                title={"Onde eu estou!"}
                                description={"Minha Casa"}
                            />
                        ) : null}

                        {pesquisa ? (
                            <Marker
                                coordinate={pesquisa}
                                title={"Pesquisa"}
                                description={""}
                            />
                        ) : null}
                    </MapView>
                    <View style={styles.caixaBotao}>
                        <TouchableOpacity
                            style={styles.myLocationBox}
                            onPress={() => {
                                setLocalicaoAtual({
                                    latitude: myPosition.latitude,
                                    longitude: myPosition.longitude,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                });
                            }}
                        >
                            <Icon name="my-location" color={"#fff"} size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.myLocationBox}
                            onPress={() => pesquisaLatLong(pesquisatxt)}
                        >
                            <Icon
                                name="find-in-page"
                                color={"#fff"}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default MapsUsuario;

const styles = StyleSheet.create({
    caixaBotao: {
        flexDirection: "row",
    },
    caixaTexto: {
        width: "95%",
        marginBottom: 10,
        marginTop: 25,
        marginLeft: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "gray",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    positionBox: {
        marginTop: -170,
        marginHorizontal: 40,
        padding: 25,
    },
    myLocationBox: {
        borderRadius: 150,
        width: 50,
        height: 50,
        marginTop: -130,
        backgroundColor: "#e74c3c",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
    },
});
