import React, { ChangeEvent, useState } from "react";
import { Container, Switch, Text, Input, Label } from "./styles";

function MonthSelect() {
    const [checked, setChecked] = useState<boolean>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e?.target?.checked);
    };
    return (
        <Container>
            <Label>
                <Text isSelected={!checked}>Monthly</Text>
                <Input
                    checked={checked}
                    type="checkbox"
                    onChange={handleChange}
                />
                <Switch />
                <Text isSelected={!!checked}>Yearly</Text>
            </Label>
        </Container>
    );
}

export default MonthSelect;
