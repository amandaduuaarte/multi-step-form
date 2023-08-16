import { useForm, FieldError } from "react-hook-form";

import React from "react";
import TextField from "../index";

interface TextFieldDocProps {
    name: string;
    label?: string;
    placeholder?: string;
    error?: FieldError;
}
const TextFieldDoc = ({
    name,
    placeholder,
    label,
    error,
}: TextFieldDocProps) => {
    const { control } = useForm();
    return (
        <TextField
            control={control}
            name={name}
            label={label}
            placeholder={placeholder}
            error={error}
        />
    );
};
export default TextFieldDoc;
