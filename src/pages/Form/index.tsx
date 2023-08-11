import React from "react";
import { Container } from "./styles";
import SideBar from "../../components/SideBar";
import Step1 from "../stepComponets";

function Form() {
    return (
        <Container>
            <SideBar />
            <Step1 status={4} />
        </Container>
    );
}

export default Form;
