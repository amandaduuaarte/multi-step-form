import React from "react";
import { Container } from "./styles";
import Steps from "../Steps";

interface StepMock {
    status: number;
    title: string;
    isActive: boolean;
}

interface StepProps {
    status: number;
}

function SideBar({ status }: StepProps) {
    const stepsMock: StepMock[] = [
        {
            status: 1,
            title: "your info",
            isActive: status === 1,
        },
        {
            status: 2,
            title: "select plan",
            isActive: status === 2,
        },
        {
            status: 3,
            title: "add-ons",
            isActive: status === 3,
        },
        {
            status: 4,
            title: "summary",
            isActive: status === 4,
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
