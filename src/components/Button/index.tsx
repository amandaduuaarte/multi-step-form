import React from "react";
import { Container, ButtonComponent } from "./styles";

interface ButtonProps {
    label: string;
    onClickEvent: any;
    secondaryBottom?: boolean;
}
function Button({ label, onClickEvent, secondaryBottom }: ButtonProps) {
    return (
        <Container>
            <ButtonComponent
                type="button"
                onClick={onClickEvent}
                isSecondary={secondaryBottom}
            >
                {label}
            </ButtonComponent>
        </Container>
    );
}

export default Button;
