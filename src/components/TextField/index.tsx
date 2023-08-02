import React from "react";
import { Controller, FieldError } from "react-hook-form";

import { Container, Input, Label } from "./styles";

interface TextFieldProps {
    name: string;
    control: any;
    label?: string;
    placeholder?: string;
}
function TextField({ name, control, label, placeholder }: TextFieldProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ref } }) => (
                <Container>
                    <Label>{label}</Label>
                    <Input
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
