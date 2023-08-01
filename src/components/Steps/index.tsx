import React from "react";
import {
    Container,
    Content,
    StepStatusIndicator,
    StepStatusText,
    StepTitleText,
} from "./styles";

interface StepsProps {
    status: number;
    isActive: boolean;
    title?: string;
}

function Steps({ status, title, isActive }: StepsProps) {
    return (
        <Container>
            <StepStatusIndicator isActive={isActive}>
                <p>{status}</p>
            </StepStatusIndicator>

            <Content>
                <StepStatusText> STEP {status}</StepStatusText>
                <StepTitleText>{title}</StepTitleText>
            </Content>
        </Container>
    );
}

export default Steps;
