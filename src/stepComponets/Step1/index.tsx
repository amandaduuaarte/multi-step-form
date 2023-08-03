import React from "react";
import { useForm } from "react-hook-form";
import {
    Container,
    Content,
    Title,
    Description,
    ContentInputs,
    ContentButton,
} from "./styles";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

function Step1() {
    const { control, handleSubmit } = useForm();

    const handleForm = (data: any) => {
        console.log(data);
    };
    return (
        <Container>
            <Content>
                <Title>Personal info</Title>
                <Description>
                    Please provide your name, email, address, and phone number.
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
            </Content>

            <ContentButton>
                <Button
                    label="Next Step"
                    onClickEvent={handleSubmit(handleForm)}
                />
            </ContentButton>
        </Container>
    );
}

export default Step1;
