import styled from "styled-components/native";
//estrutura de dados da pagina
export const Tela = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;
////
// Titulo da pagina
export const Titulo = styled.Text`
    font-weight: bold;
    font-size: 30px;
    color: #000000;

    margin-top: 15px;
`;
////
// SubTitulo da pagina
export const SubTitulo = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #a1a1a1;
    margin-top: 10px;
    padding-right: 56%;
`;
////
// entranda de dados input
export const EntradaFormulario = styled.TextInput`
    width: 80%;
    margin-bottom: 6px;
    font-size: 14px;
    bottom: 1%;
    align-items: center;
    justify-content: flex-end;
    border-width: 1px;
    border-color: #000cff;
    font-size: 17px;
    padding: 15px;
    border-radius: 10px;
`;
////
// botao e texto recupera senhar
export const BotaoRecuperar = styled.TouchableOpacity`
    width: 70%;
    background-color: #000cff;
    border-radius: 25px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 10px;
`;
export const TextoRecuperar = styled.Text`
    color: #fff;
    font-size: 20px;
`;
////
