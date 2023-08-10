import React from "react";
import { Container } from "./styles";
import SideBar from "../../components/SideBar";
import Step1 from "../stepComponets/Step1";

function Form() {
    return (
        <Container>
            <SideBar />
            <Step1 status={2} />
        </Container>
    );
}

export default Form;
