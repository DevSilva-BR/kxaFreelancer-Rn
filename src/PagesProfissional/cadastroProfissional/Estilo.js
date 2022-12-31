import styled from "styled-components/native";

// Titulo da pagina
export const Titulo = styled.Text`
    font-weight: bold;
    font-size: 30px;
    color: #000000;
    margin-bottom: 5px;
`;
////
// SubTitulo da pagina
export const SubTitulo = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #a1a1a1;
    margin-bottom: 20px;
`;
////
// tela e estruda da pagina
export const Tela = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    bottom: 1px;
    background-color: #fff;
`;
////
// entranda de dados do input
export const EntradaFormulario = styled.TextInput`
    width: 90%;
    margin-bottom: 10px;
    font-size: 14px;
    bottom: 1%;
    align-items: center;
    border-width: 1px;
    border-color: blue;
    font-size: 17px;
    padding: 15px;
    border-radius: 10px;
`;
////

// botao e texto login
export const BotaoCadastra = styled.TouchableOpacity`
    width: 80%;
    background-color: #000cff;
    border-radius: 25px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    font-weight: bold;
    font-size: 20px;
`;
//
export const TextoLogin = styled.Text`
    color: #fff;
    font-size: 20px;
`;
////
