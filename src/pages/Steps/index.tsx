import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

import MonthSelect from "../../components/MonthSelect";
import Checkbox from "../../components/Checkbox";
import CheckoutReview from "../../components/CheckoutReview";
import { useFormStep } from "../../hooks/useFormStep";

import Adds from "../../constants/mocks/Adds.json";
import { Plans } from "../../constants/mocks/Plans.js";
import Finish from "../../components/Finish";

interface SptepsProps {
    status: number;
}
interface HeaderProps {
    title: string;
    description: string;
}

interface FirstStepForm {
    step: number;
    name: string;
    email: string;
    phone: string;
}

function Step({ status }: SptepsProps) {
    const { handleNextStep, handleBeforeStep, step } = useFormStep();

    const schema = yup.object().shape({
        name: yup.string().required("Name must be informed."),
        email: yup.string().email().required("Email must be informed."),
        phone: yup.string().min(8).required("Phone must be informed."),
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<any>({
        resolver: yupResolver(schema),
    });

    const handleForm = (data: FirstStepForm) => {
        console.log(data);
        handleNextStep();
    };

    const backForm = () => {
        handleBeforeStep();
    };

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
                                error={errors?.name}
                            />
                            <TextField
                                control={control}
                                name="email"
                                label="Email Address"
                                placeholder="e.g stephenKing@lorem.com"
                                error={errors?.email}
                            />
                            <TextField
                                control={control}
                                name="phone"
                                label="Phone Number"
                                placeholder="e.g +1 234 567 890"
                                error={errors?.phone}
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
                            {Plans.plans.map((plan) => (
                                <PlanCard
                                    control={control}
                                    name="plan"
                                    key={plan.id}
                                    iconUrl={plan.cover}
                                    title={plan.title}
                                    price={plan.price}
                                    handleSelectedItem={() =>
                                        console.log("console")
                                    }
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
                            {Adds.adds.map((add) => (
                                <Checkbox
                                    name="adds"
                                    control={control}
                                    title={add.title}
                                    description={add.description}
                                    price={add.price}
                                />
                            ))}
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
                        <CheckoutReview
                            total={12}
                            type="Yearly"
                            price={12}
                            plan="Arcade"
                        />
                    </>
                )}

                {status === 5 && <Finish />}
            </Content>

            <ContainerButtons>
                {status !== 5 && (
                    <>
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
                    </>
                )}
            </ContainerButtons>
        </Container>
    );
}

export default Step;
