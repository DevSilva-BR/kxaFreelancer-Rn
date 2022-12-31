import { AntDesign, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BotaoAdiciona from "../components/botaoAdd";
import servicos from "../pagesUsuarios/create";
import Detalhe from "../pagesUsuarios/detalheUsuarios";
import MapsUsuario from "../pagesUsuarios/mapsUsuario";
import PaginaInicialUsuarios from "../pagesUsuarios/paginaInicialUsuarios";
import PerfilUsuarios from "../pagesUsuarios/perfilUsuarios";
import Socio1 from "../pagesUsuarios/socios/socio1";
import Socio2 from "../pagesUsuarios/socios/socio2";
import Socio3 from "../pagesUsuarios/socios/socio3";
import Socio4 from "../pagesUsuarios/socios/socio4";

import mapsProfissional from "../PagesProfissional/mapsProfissional";
import PaginaInicialProfissional from "../PagesProfissional/paginaInicialProfissional";
import PerfilProfissional from "../PagesProfissional/perfilProfissional";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={PaginaInicialUsuarios}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home2"
                component={PaginaInicialProfissional}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detalhe"
                component={Detalhe}
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

            <Stack.Screen
                name="Socio1"
                component={Socio1}
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
            <Stack.Screen
                name="Socio2"
                component={Socio2}
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
            <Stack.Screen
                name="Socio3"
                component={Socio3}
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
            <Stack.Screen
                name="Socio4"
                component={Socio4}
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
            <Stack.Screen
                name="PerfilUsuarios"
                component={PerfilUsuarios}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PaginaInicialUsuarios"
                component={PaginaInicialUsuarios}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="servicos"
                component={servicos}
                options={{
                    headerShown: false,
                    
                }}
            />
            <Stack.Screen
                name="PaginaInicialProfissional"
                component={PaginaInicialProfissional}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PerfilProfissional"
                component={PerfilProfissional}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="mapsProfissional"
                component={mapsProfissional}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

function StackScreen2() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MapsUsuario"
                component={MapsUsuario}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

function AppRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Inicio"
                component={StackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="home" color={"black"} size={size} />
                        );
                    },
                }}
            />

            <Tab.Screen
                name="add"
                component={StackScreen2}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ size, color }) => (
                        <BotaoAdiciona size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={PerfilUsuarios}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Feather name="user" color={"black"} size={size} />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default AppRoutes;
