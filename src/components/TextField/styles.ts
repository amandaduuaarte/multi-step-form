import styled from "styled-components";
import colors from "../../styles/colors";

interface InputProps {
    isInvalid: boolean;
}
export const Container = styled.div`
    display: flex;
    height: 64px;
    width: 80%;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: "Ubuntu";
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 16px;
    color: ${colors.MarineBlue};
    align-self: flex-end;
`;

export const Input = styled.input<InputProps>`
    margin-top: 8px;
    height: 45px;
    width: 80%;
    border: 1px solid
        ${({ isInvalid }) =>
            isInvalid ? colors.StrawberryRed : colors.PastelBlue};
    border-radius: 6px;
    font-size: 16px;
    font-weight: 700;
    padding: 12px;
    color: ${colors.MarineBlue};
`;

export const ErrorWrapper = styled.label`
    font-weight: 500;
    color: ${colors.StrawberryRed};
    font-size: 16px;
    align-self: flex-end;
`;
