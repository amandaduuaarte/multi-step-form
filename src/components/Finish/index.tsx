import React from "react";
import { Container, Title, IconContainer, Icon, Description } from "./styles";

import Thanks from "../../assets/images/icon-thank-you.svg";

function Finish() {
    return (
        <Container>
            <IconContainer>
                <Icon src={Thanks} />
            </IconContainer>
            <Title>Thank you</Title>
            <Description>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </Description>
        </Container>
    );
}

export default Finish;
