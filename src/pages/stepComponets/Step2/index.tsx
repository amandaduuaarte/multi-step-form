import React, { useState } from "react";

import { Container, Content } from "./styles";
import PlanCard from "../../../components/PlanCard";
import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";

function Step2() {
    const [isSelected, setIsSelected] = useState(false);
    const mockPlans = [
        {
            icon: ArcadeIcon,
            title: "Arcade",
            price: 9,
        },
        {
            icon: AdvancedIcon,
            title: "Advanced",
            price: 12,
        },
        {
            icon: ProIcon,
            title: "Pro",
            price: 15,
        },
    ];

    return (
        <Container>
            <Content>
                {mockPlans.map((plan) => (
                    <PlanCard
                        iconUrl={plan.icon}
                        title={plan.title}
                        price={plan.price}
                        handleSelectedItem={setIsSelected}
                    />
                ))}
            </Content>
        </Container>
    );
}

export default Step2;
