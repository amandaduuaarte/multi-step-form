import React from "react";
import { Controller, FieldError, Control } from "react-hook-form";

import { Container, ErrorWrapper, Input, Label, TextContainer } from "./styles";

interface TextFieldProps {
    name: string;
    control: Control;
    label?: string;
    placeholder?: string;
    error?: FieldError;
}
function TextField({
    name,
    control,
    label,
    placeholder,
    error,
}: TextFieldProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ref } }) => (
                <Container>
                    <TextContainer>
                        <Label>{label}</Label>
                        {error && <ErrorWrapper>{error.message}</ErrorWrapper>}
                    </TextContainer>
                    <Input
                        isInvalid={!!error}
                        ref={ref}
                        onChange={onChange}
                        value={value}
                        placeholder={placeholder}
                    />
                </Container>
            )}
        />
    );
}

export default TextField;
