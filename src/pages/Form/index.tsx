import React, { useState } from "react";
import { Container } from "./styles";
import SideBar from "../../components/SideBar";
import Steps from "../Steps";

function Form() {
    const [step, setStep] = useState(1);

    return (
        <Container>
            <SideBar status={step} />
            <Steps setStatus={setStep} status={step} />
        </Container>
    );
}

export default Form;
