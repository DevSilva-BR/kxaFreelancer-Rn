import React, { useEffect, useState, useContext } from "react";
import "react-native-gesture-handler";
import { firebase } from "../service/Firebase";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./Auth";
import AppRoutes from "../routes/app.routes";
import AuthRoutes from "../routes/auth.routes";

const auth = firebase.auth();
export default function UserState() {
    const [spinner, setSpinner] = useState(false);

    const [loading, setLoading] = useState(true);
    //carrecamento
    const { user, setUser } = useContext(AuthContext);
    //usuario
    const [loggedIn, setLoggedIn] = useState(null);
    //logado

    useEffect(() => {
        const usersRef = firebase.firestore().collection("usuario");
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((document) => {
                        const userData = document.data();
                        setLoading(false);
                        setUser(userData);
                        setLoggedIn(true);
                    })
                    .catch((error) => {
                        setLoading(false);
                    });
            } else {
                setLoading(false);
                setLoggedIn(false);
            }
        });
        return () => console.log("carregando...");
    }, []);

    if (loading) {
        return <></>;
    }

    return (
        <NavigationContainer>
            {loggedIn ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}
