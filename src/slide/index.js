import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Estilo } from "./Estilo";
export default function SplashScreen({ navigation }) {
    return (
        <View style={Estilo.Tela}>
            <View style={Estilo.header}>
                <Image
                    source={require("./logoNov.png")}
                    style={Estilo.logo}
                    resizeMode="contain"
                    opacity={10}
                />
            </View>
            <View style={[Estilo.footer, {}]}>
                <Text style={[Estilo.title, {}]}>
                    Seja Bem-Vindo a Kxa Freelancer
                </Text>
                <Text style={Estilo.text}>
                    Procure o Profissional para resolver seu problema, Nascemos
                    em 2022 com o proposito de conectar quem precisa com quem
                    sabe fazer
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        padding: 1,
                        alignItems: "flex-start",
                    }}
                >
                    <View style={Estilo.button}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("LoginProfissional")
                            }
                        >
                            <Text style={Estilo.textSign}>Começa </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
