import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { Container, IconContainer, Icon, TextContainer } from "./styles";

interface PlanCardProps {
    control: Control;
    name: string;
    iconUrl: string;
    title: string;
    price: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectedItem: (select: any) => void;
}
function PlanCard({
    control,
    name,
    handleSelectedItem,
    iconUrl,
    title,
    price,
}: PlanCardProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <Container isActive={isActive} onClick={() => onChange()}>
                    <IconContainer>
                        <Icon src={iconUrl} alt={`${title}Icon`} />
                    </IconContainer>

                    <TextContainer>
                        <h2>{title}</h2>
                        <p>${price}/mo</p>
                    </TextContainer>
                </Container>
            )}
        />
    );
}

export default PlanCard;
