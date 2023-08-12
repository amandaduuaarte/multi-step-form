import React from "react";
import { Container, Content, Title, Description, Line, Body } from "./styles";
import colors from "../../styles/colors";

interface CheckoutValues {
    price: number;
    plan: string;
    type: "Monthly" | "Yearly";
    total: number;
    services?: any;
}
function CheckoutReview({
    price,
    plan,
    type,
    total,
    services,
}: CheckoutValues) {
    return (
        <Container>
            <Body>
                <Content>
                    <Title>
                        {plan} ({type})
                    </Title>
                    <Description row={2}>Change</Description>
                    <Description
                        column={4}
                        row={2}
                        color={colors.MarineBlue}
                        bold
                    >
                        +${price}/mo
                    </Description>
                </Content>

                <Line />

                <Content>
                    <Description>Online service</Description>
                    <Description row={2}>Larger storage</Description>
                    <Description column={4} color={colors.MarineBlue} bold>
                        +${price}/mo
                    </Description>
                    <Description
                        row={2}
                        column={4}
                        color={colors.MarineBlue}
                        bold
                    >
                        +${price}/mo
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
                    +${total}/mo
                </Description>
            </Content>
        </Container>
    );
}

export default CheckoutReview;
