import React from "react";
import { Container, ButtonComponent } from "./styles";

interface ButtonProps {
    label: string;
    onClickEvent: any;
}
function Button({ label, onClickEvent }: ButtonProps) {
    return (
        <Container>
            <ButtonComponent type="button" onClick={onClickEvent}>
                {label}
            </ButtonComponent>
        </Container>
    );
}

export default Button;
