import React, { useCallback, useState } from "react";
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
    CheckboxContainer,
} from "./styles";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import PlanCard from "../../components/PlanCard";
import ArcadeIcon from "../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../assets/images/icon-advanced.svg";
import ProIcon from "../../assets/images/icon-pro.svg";
import MonthSelect from "../../components/MonthSelect";
import Checkbox from "../../components/Checkbox";
import CheckoutReview from "../../components/CheckoutReview";
import { useFormStep } from "../../hooks/useFormStep";

interface SptepsProps {
    status: number;
}
interface HeaderProps {
    title: string;
    description: string;
}

function Step({ status }: SptepsProps) {
    const { control, handleSubmit } = useForm();
    const { handleNextStep, handleBeforeStep } = useFormStep();

    const handleForm = useCallback(
        (data: any) => {
            handleNextStep();
        },
        [handleNextStep]
    );

    const backForm = () => {
        handleBeforeStep();
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

    const renderHeader = ({ title, description }: HeaderProps): JSX.Element => {
        return (
            <>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </>
        );
    };

    return (
        <Container>
            <Content>
                {status === 1 && (
                    <>
                        {renderHeader({
                            title: "Personal info",
                            description:
                                "Please provide your name, email, address, and phone number.",
                        })}
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
                        {renderHeader({
                            title: "Select your plan",
                            description:
                                "You have the option of monthly or yearly billing.",
                        })}
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

                {status === 3 && (
                    <>
                        {renderHeader({
                            title: "Pick add-ons",
                            description:
                                "Add-ons help enhance your gaming experience.",
                        })}

                        <CheckboxContainer>
                            <Checkbox
                                isSelected
                                title="Online service"
                                description="Access to multiplayer games"
                                price={1}
                            />
                            <Checkbox
                                title="Online service"
                                description="Access to multiplayer games"
                                price={1}
                            />
                            <Checkbox
                                title="Online service"
                                description="Access to multiplayer games"
                                price={1}
                            />
                        </CheckboxContainer>
                    </>
                )}

                {status === 4 && (
                    <>
                        {renderHeader({
                            title: "Finishing up",
                            description:
                                "Double-check everything looks OK before confirming.",
                        })}
                        <CheckoutReview />
                    </>
                )}
            </Content>

            <ContainerButtons>
                <ContentButton>
                    {status > 1 && (
                        <Button
                            secondaryBottom
                            label="Go Back"
                            onClickEvent={() => backForm()}
                        />
                    )}
                </ContentButton>

                <ContentButton>
                    <Button
                        label={status !== 4 ? "Next Step" : "Confirm"}
                        onClickEvent={handleSubmit(handleForm)}
                    />
                </ContentButton>
            </ContainerButtons>
        </Container>
    );
}

export default Step;
