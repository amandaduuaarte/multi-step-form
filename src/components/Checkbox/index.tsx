import React from "react";
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
}
function Checkbox({ title, description, price, isSelected }: CheckboxProps) {
    return (
        <Container isSelected={isSelected}>
            <InputCheckbox type="checkbox" />
            <ContainerDescriptions>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ContainerDescriptions>
            <Price>+${price}/mo</Price>
        </Container>
    );
}

export default Checkbox;
