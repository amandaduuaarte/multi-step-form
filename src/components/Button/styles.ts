import { styled } from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
    display: flex;
`;

export const ButtonComponent = styled.button`
    border: none;
    background: ${colors.MarineBlue};
    height: 40px;
    width: 120px;
    border-radius: 8px;
    color: ${colors.Alabaster};
    font-size: 16px;
    font-weight: 400;
`;
