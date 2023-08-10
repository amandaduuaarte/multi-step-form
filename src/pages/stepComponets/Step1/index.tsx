import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Container,
    Content,
    Title,
    Description,
    ContentInputs,
    ContentButton,
    Row,
    ContainerButtons,
    MonthSelectContainer,
} from "./styles";
import TextField from "../../../components/TextField";
import Button from "../../../components/Button";
import PlanCard from "../../../components/PlanCard";
import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";
import MonthSelect from "../../../components/MonthSelect";

interface SptepsProps {
    status: number;
}
function Step1({ status }: SptepsProps) {
    const { control, handleSubmit } = useForm();

    const handleForm = (data: any) => {
        console.log(data);
    };
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
                {status === 1 && (
                    <>
                        <Title>Personal info</Title>
                        <Description>
                            Please provide your name, email, address, and phone
                            number.
                        </Description>

                        <ContentInputs>
                            <TextField
                                control={control}
                                name="name"
                                label="Name"
                                placeholder="e.g Stephen King"
                            />
                            <TextField
                                control={control}
                                name="email"
                                label="Email Address"
                                placeholder="e.g stephenKing@lorem.com"
                            />
                            <TextField
                                control={control}
                                name="phone"
                                label="Phone Number"
                                placeholder="e.g +1 234 567 890"
                            />
                        </ContentInputs>
                    </>
                )}

                {status === 2 && (
                    <>
                        <Title>Select your plan</Title>
                        <Description>
                            You have the option of monthly or yearly billing.
                        </Description>
                        <Row>
                            {mockPlans.map((plan) => (
                                <PlanCard
                                    iconUrl={plan.icon}
                                    title={plan.title}
                                    price={plan.price}
                                    handleSelectedItem={setIsSelected}
                                />
                            ))}
                            <MonthSelectContainer>
                                <MonthSelect />
                            </MonthSelectContainer>
                        </Row>
                    </>
                )}
            </Content>

            <ContainerButtons>
                <ContentButton>
                    {status > 1 && (
                        <Button
                            secondaryBottom
                            label="Go Back"
                            onClickEvent={handleSubmit(handleForm)}
                        />
                    )}
                </ContentButton>

                <ContentButton>
                    <Button
                        label="Next Step"
                        onClickEvent={handleSubmit(handleForm)}
                    />
                </ContentButton>
            </ContainerButtons>
        </Container>
    );
}

export default Step1;
