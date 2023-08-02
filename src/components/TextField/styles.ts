import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
    display: flex;
    height: 64px;
    width: 80%;
    margin: 10%;
    flex-direction: column;
    justify-content: space-between;
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 16px;
    color: ${colors.PurplishBlue};
`;

export const Input = styled.input`
    margin-top: 8px;
    height: 45px;
    width: 80%;
    border: 1px solid ${colors.PastelBlue};
    border-radius: 6px;
    font-size: 16px;
    padding: 12px;
    color: ${colors.MarineBlue};
`;
