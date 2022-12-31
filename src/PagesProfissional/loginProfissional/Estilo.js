import styled from "styled-components/native";
// Fundo da tela
export const FundoTela = styled.ScrollView`
    background-color: #010101;
`;
////
//
export const Tela = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #ff21ff;
`;
////
//
export const Logo = styled.Image`
    width: 10%;
    height: 60%;
    justify-content: center;
    bottom: -8%;
    margin-top: 1px;
    flex: 1;
    padding: 1px;
    margin: 10%;
`;
////
//
export const EntradaFormulario = styled.TextInput`
    width: 95%;
    margin-bottom: 15px;
    font-size: 14px;
    bottom: -1%;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: #000cff;
    font-size: 17px;
    padding: 10px;
    border-radius: 10px;
    padding-left: 10px;
    justify-content: center;
    color: #010101;
`;
export const AreaEntradaFormulario = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
////

////
// Titulo da pagina
export const Titulo = styled.Text`
    font-size: 20px;
    color: #000;
    font-weight: bold;
    font-family: Foundation;
`;
////
// SubTitulo da pagina
export const SubTitulo = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #a1a1a1;
`;
////
// entrada de dados do input login email e senhar

export const Botaologin = styled.TouchableOpacity`
    width: 60%;
    height: 45px;
    border-radius: 20px;
    margin-top: 7%;
    background-color: #000cff;
    justify-content: center;
    align-items: center;
`;

export const TextoCriarConta = styled.Text`
    font-size: 20px;
    color: #010101;
`;

export const BotaoEsquenceuSenhar = styled.TouchableOpacity``;
//
export const TextoEsquenceuSenhar = styled.Text`
    color: #a1a1a1;
    font-size: 16px;
    margin-top: 15px;
`;
////
// botao criar conta e texto
export const BotaoCriarConta = styled.TouchableOpacity``;
//

export const TextoLogin = styled.Text`
    color: #fff;
    font-size: 20px;
    justify-content: center;
`;
export const TelaBotoes = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: -15px;
`;

export const LogoArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    bottom: 10%;
    margin: 1px;
    width: 95%;
    height: 100%;
    padding: 1px;
`;