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
}
function Checkbox({ title, description, price }: CheckboxProps) {
    return (
        <Container>
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
