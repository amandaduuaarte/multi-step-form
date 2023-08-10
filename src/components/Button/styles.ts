import { styled } from "styled-components";
import colors from "../../styles/colors";

interface ButtonProps {
    isSecondary?: boolean;
}
export const Container = styled.div`
    display: flex;
`;

export const ButtonComponent = styled.button<ButtonProps>`
    border: none;
    background: ${({ isSecondary }) =>
        isSecondary ? colors.white : colors.MarineBlue};
    height: 40px;
    width: 120px;
    border-radius: 8px;
    color: ${({ isSecondary }) =>
        isSecondary ? colors.MarineBlue : colors.Alabaster};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
`;
