import React, { useState } from "react";
import { ScrollView } from "react-native";
import Dialog from "react-native-dialog";
import { AuthContext } from "../../auth/Auth";
import { Restart } from "../../components/reload";
import { firebase } from "../../service/Firebase";
import {
    B,
    BotaoApagaContar,
    BotaoSair,
    DetailText,
    EntradaFormulario,
    Tela,
    TelaBotoes,
    Text,
    Titulo,
} from "./styles";

const auth = firebase.auth();

export default function PerfilUsuarios(props) {
    const userData = props.extraData;
    const [visible, setVisible] = useState(false);

    let [user] = useState(AuthContext);
    user = user._currentValue.user;

    const Sair = () => {
        try {
            auth.signOut();
            Restart();
        } catch (error) {
            alert(e);
        }
    };
    const Deleta = async () => {
        setSpinner(true);
        const collectionRef = firebase.firestore();
        await collectionRef.collection("users").doc(userData.id).delete();
        const user = firebase.auth().currentUser;
        user.delete()
            .then(function () {
                setSpinner(false);
                firebase.auth().signOut();
            })
            .catch(function (error) {
                setSpinner(false);
                console.log(error);
            });
    };
    const CaixaDialogo = () => {
        setVisible(true);
    };
    const Cancelar = () => {
        setVisible(false);
    };

    const deleteUser = async () => {
        setLoading(true);
        const dbRef = firebase.firestore
            .collection("usuario")
            .doc(props.route.params.id);
        await dbRef.delete();
        setLoading(false);
        props.navigation.navigate("Home");
    };
    return (
        <Tela>
            <Titulo>Perfil</Titulo>
            <ScrollView>
                <Text>Account ID</Text>
                <EntradaFormulario>
                    <DetailText>{user.id}</DetailText>
                </EntradaFormulario>
                <Text>Nome</Text>
                <EntradaFormulario>
                    <DetailText>{user.nome}</DetailText>
                </EntradaFormulario>
                <Text>Email</Text>
                <EntradaFormulario>
                    <DetailText>{user.email}</DetailText>
                </EntradaFormulario>
            </ScrollView>
            <TelaBotoes>
                <BotaoSair onPress={() => Sair()}>
                    <B>Sair</B>
                </BotaoSair>
                <BotaoApagaContar onPress={() => CaixaDialogo()}>
                    <B>apagar</B>
                </BotaoApagaContar>
            </TelaBotoes>

            <Dialog.Container visible={visible}>
                <Dialog.Title>Deleta Conta</Dialog.Title>
                <Dialog.Description>
                    Deseja excluir esta conta? {"\n"}Você não pode desfazer esta
                    ação.
                </Dialog.Description>
                <Dialog.Button label="Cancelar" onPress={Cancelar} />
                <Dialog.Button label="Delete" onPress={deleteUser} />
            </Dialog.Container>
        </Tela>
    );
}

/*

*/
