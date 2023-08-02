import React from "react";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import SideBar from "../../components/SideBar";
import TextField from "../../components/TextField";

function Form() {
    const { control } = useForm();
    return (
        <Container>
            <SideBar />
            <TextField
                control={control}
                name="teste"
                label="input 1"
                placeholder="teste"
            />
        </Container>
    );
}

export default Form;
