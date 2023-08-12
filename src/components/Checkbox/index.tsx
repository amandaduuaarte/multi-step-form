import React from "react";
import { Control, Controller } from "react-hook-form";
import {
    Container,
    InputCheckbox,
    ContainerDescriptions,
    Title,
    Description,
    Price,
} from "./styles";

interface CheckboxProps {
    title: string;
    description: string;
    price: number;
    isSelected?: boolean;
    name: string;
    control: Control;
}
function Checkbox({
    title,
    description,
    price,
    isSelected,
    name,
    control,
}: CheckboxProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, ref } }) => (
                <Container isSelected={isSelected}>
                    <InputCheckbox
                        ref={ref}
                        type="checkbox"
                        value={value}
                        onChange={onChange}
                    />
                    <ContainerDescriptions>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </ContainerDescriptions>
                    <Price>+${price}/mo</Price>
                </Container>
            )}
        />
    );
}

export default Checkbox;
