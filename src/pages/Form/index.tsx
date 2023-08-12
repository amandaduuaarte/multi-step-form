import React, { useState } from "react";
import { Container } from "./styles";
import SideBar from "../../components/SideBar";
import Steps from "../Steps";
import { useFormStep } from "../../hooks/useFormStep";

function Form() {
    const { step } = useFormStep();

    return (
        <Container>
            <SideBar status={step} />
            <Steps status={step} />
        </Container>
    );
}

export default Form;
