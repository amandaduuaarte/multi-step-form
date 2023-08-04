import React, { useState } from "react";
import { Container, IconContainer, Icon, TextContainer } from "./styles";

interface PlanCardProps {
    iconUrl: string;
    title: string;
    price: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectedItem: (select: any) => void;
}
function PlanCard({
    handleSelectedItem,
    iconUrl,
    title,
    price,
}: PlanCardProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <Container
            isActive={isActive}
            onClick={() =>
                handleSelectedItem(setIsActive((prev: boolean) => !prev))
            }
        >
            <IconContainer>
                <Icon src={iconUrl} alt={`${title}Icon`} />
            </IconContainer>

            <TextContainer>
                <h2>{title}</h2>
                <p>${price}/mo</p>
            </TextContainer>
        </Container>
    );
}

export default PlanCard;
