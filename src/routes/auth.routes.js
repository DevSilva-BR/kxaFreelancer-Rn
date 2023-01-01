import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import RecuperaSenhar from "../recuperaSenha/index";
import Slide from "../slide";
import LoginUsuarios from "../pagesUsuarios/loginUsuarios";
import CadastroUsuarios from "../pagesUsuarios/cadastroUsuarios";
import LoginProfissional from "./../PagesProfissional/loginProfissional/index";
import CadastroProfissional from "./../PagesProfissional/cadastroProfissional";
const Stack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Slide"
                component={Slide}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="LoginProfissional"
                component={LoginProfissional}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CadastroProfissional"
                component={CadastroProfissional}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="RecuperaSenhar"
                component={RecuperaSenhar}
                options={{
                    headerStyle: {
                        backgroundColor: "#fff",
                        borderBottomWidth: 1,
                        borderBottomColor: "#000cff",
                    },
                    headerTintColor: "#131313",
                    headerBackTitleVisible: false,
                    headerTitle: "Voltar",
                }}
            />
        </Stack.Navigator>
    );
}
