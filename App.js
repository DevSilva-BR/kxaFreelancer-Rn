import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { Auth } from "./src/auth/Auth";
import UserState from "./src/auth/UserState";
export default function App() {
    return (
        <Auth>
            <StatusBar backgroundColor="#000cff" translucent={false} />
            <UserState />
        </Auth>
    );
}
