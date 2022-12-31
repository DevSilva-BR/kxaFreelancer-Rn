import styled from "styled-components/native";

// paleta de cor da pagina
export const Colors = {
    lavender: "#D6D5EA",
    yellow: "#FCA311",
    navy: "#14213D",
    light: "#EDECF6",
};
const { lavender, yellow, navy, light } = Colors;
////
// estrutura pai da pagina
export const Tela = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    padding: 10px 30px 15px 30px;
    font-size: 14px;
`;
////
// botao sair da conta
export const BotaoSair = styled.TouchableOpacity`
    padding: 10px 15px 10px 1px;
    border: 1px solid ${navy};
    background-color: transparent;
    border-radius: 25px;
    color: ${navy};
    align-items: center;
    margin: 5px 5px 5px 30px;
    bottom: 10px;
`;
////
//
export const BotaoApagaContar = styled.TouchableOpacity`
    padding: 10px 10px 10px 10px;
    border: 1px solid ${navy};
    background-color: red;
    border-radius: 25px;
    color: ${navy};
    align-items: center;
    margin: 6px 6px 6px 30px;
    bottom: 10px;
`;
////
// Title for each screen
export const Titulo = styled.Text`
    font-size: 21px;
    color: ${navy};
    text-align: center;
    margin: 25px;
    top: 2%;
`;
////
// entrada de dados inpurt
export const EntradaFormulario = styled.View`
    background-color: ${light};
    border: 1px solid blue;
    border-radius: 5px;
    margin: 10px 2px 10px 10px;
`;
////
//
export const DetailText = styled.Text`
    padding: 11px;
`;
////
//
export const Text = styled.Text`
    color: ${navy};
    margin: 0px 30px 2px 30px;
`;
export const B = styled.Text`
    color: ${navy};
    margin: 0px 30px 2px 30px;
    justify-content: center;
    align-items: center;
`;
////
//
export const TelaBotoes = styled.View`
    flex-direction: row;
    margin-bottom: 80px;
`;
////
export const BotaoCriarConta = styled.TouchableOpacity``;
//
