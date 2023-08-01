import React from "react";
import { Container } from "./styles";
import Steps from "../Steps";

interface StepMock {
    status: number;
    title: string;
    isActive: boolean;
}

function SideBar() {
    const stepsMock: StepMock[] = [
        {
            status: 1,
            title: "your info",
            isActive: true,
        },
        {
            status: 2,
            title: "select plan",
            isActive: false,
        },
        {
            status: 3,
            title: "add-ons",
            isActive: false,
        },
        {
            status: 4,
            title: "summary",
            isActive: false,
        },
    ];
    return (
        <Container>
            {stepsMock.map((step) => (
                <Steps
                    status={step.status}
                    title={step.title}
                    isActive={step.isActive}
                />
            ))}
        </Container>
    );
}

export default SideBar;
