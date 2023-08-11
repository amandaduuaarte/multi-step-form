import React from "react";
import { Container, Content, Title, Description, Line, Body } from "./styles";
import colors from "../../styles/colors";

function CheckoutReview() {
    return (
        <Container>
            <Body>
                <Content>
                    <Title>Arcade (Monthly)</Title>
                    <Description row={2}>Change</Description>
                    <Description
                        column={4}
                        row={2}
                        color={colors.MarineBlue}
                        bold
                    >
                        +$1/mo
                    </Description>
                </Content>

                <Line />

                <Content>
                    <Description>Online service</Description>
                    <Description row={2}>Larger storage</Description>
                    <Description column={4} color={colors.MarineBlue} bold>
                        +$1/mo
                    </Description>
                    <Description
                        row={2}
                        column={4}
                        color={colors.MarineBlue}
                        bold
                    >
                        +$2/mo
                    </Description>
                </Content>
            </Body>

            <Content>
                <Description>Total (per month)</Description>
                <Description
                    column={4}
                    color={colors.PurplishBlue}
                    bold
                    size={18}
                >
                    +$12/mo
                </Description>
            </Content>
        </Container>
    );
}

export default CheckoutReview;
