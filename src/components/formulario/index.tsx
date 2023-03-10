import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Container, Input } from "./styles";

interface Props extends TextInputProps {
    control: Control;
    name: string;
}

export function Formulario({ name, control, ...rest }: Props) {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input onChangeText={onChange} value={value} {...rest} />
                )}
                name={name}
            />
        </Container>
    );
}

export default Formulario;
