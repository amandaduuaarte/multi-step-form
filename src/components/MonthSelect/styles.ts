import { styled } from "styled-components";
import colors from "../../styles/colors";
import devices from "../../constants/devices";

interface TextProps {
    isSelected?: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: ${colors.Magnolia};
    border-radius: 8px;
    height: 40px;
    width: 30vw;

    @media ${devices.md} {
        width: 80%;
        margin: 8% 0;
        height: 60px;
    }
`;

export const Text = styled.p<TextProps>`
    font-size: 14px;
    font-weight: 500;
    color: ${({ isSelected }) =>
        isSelected ? colors.PurplishBlue : colors.CoolGray};

    @media ${devices.md} {
        font-size: 18px;
    }
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const Switch = styled.div`
    position: relative;
    width: 50px;
    height: 18px;
    background: ${colors.MarineBlue};
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;
    margin: 0 12px;

    &:before {
        transition: 300ms all;
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
    }
`;

export const Input = styled.input`
    opacity: 0;
    position: absolute;

    &:checked + ${Switch} {
        background: ${colors.MarineBlue};

        &:before {
            transform: translate(32px, -50%);
        }
    }
`;
