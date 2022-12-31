import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
    width: 100%;

    padding: 24px;
    background-color: #f9fafc;

    border-bottom-width: 1px;
    border-color: #dde3f0;
    margin-top: 44px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    color: #8fa7b3;
    font-size: 24px;
`;

export const Icon = styled(Feather)`
    width: 100%;
    left: 5px;

    font-size: 40px;
    color: #15b6d6;
`;

export const IconCancel = styled(Feather)`
    width: 100%;
    right: 20px;

    font-size: 40px;
    color: #ff669d;
`;

export const ShowCancelView = styled.View`
    width: 100%;
`;
