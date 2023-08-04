import React from "react";
import { Container } from "./styles";
import SideBar from "../../components/SideBar";
import Step1 from "../stepComponets/Step1";
import Step2 from "../stepComponets/Step2";

function Form() {
    return (
        <Container>
            <SideBar />
            {/* <Step1 /> */}
            <Step2 />
        </Container>
    );
}

export default Form;
