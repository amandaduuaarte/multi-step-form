import { styled } from "styled-components";
import colors from "../../styles/colors";
import devices from "../../constants/devices";

interface CheckboxProps {
    isSelected?: boolean;
}
export const Container = styled.div<CheckboxProps>`
    width: 30vw;
    height: 14vh;
    border-radius: 8px;
    border: 1px solid
        ${({ isSelected }) =>
            isSelected ? colors.PurplishBlue : colors.LightGray};
    display: grid;
    grid-template-columns: 4vw 20vw 4vw;
    grid-template-rows: 3vh 8vh;
    margin-bottom: 10px;
    background: ${({ isSelected }) =>
        isSelected ? colors.Magnolia : colors.white};

    cursor: pointer;
    &:hover {
        background: ${colors.Magnolia};
        border-color: ${colors.PurplishBlue};
    }

    @media ${devices.xl} {
        width: 100%;
        grid-template-rows: 3vh;
        grid-template-columns: 6vw 25vw 8vw;
    }

    @media ${devices.md} {
        width: 80vw;
        grid-template-columns: 12vw 55vw 2vw;
        grid-template-rows: 6vh 9vh;
        margin-bottom: 10px;
    }
`;

export const InputCheckbox = styled.input`
    grid-column: 1;
    grid-row: 2;
    height: 24px;
    width: 24px;
    margin-left: 20px;
    border: 1px solid ${colors.LightGray};

    @media ${devices.xl} {
        margin-left: 12px;
    }
    @media ${devices.md} {
        height: 20px;
        width: 20px;
    }
`;

export const ContainerDescriptions = styled.div`
    grid-row: 1;
    grid-column: 2;
    margin-top: 3%;

    @media ${devices.xl} {
        margin-top: 6%;
    }
`;

export const Title = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: ${colors.MarineBlue};
    margin-bottom: 0;

    @media ${devices.md} {
        font-size: 14px;
    }
`;

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.CoolGray};
    margin-top: 3%;
`;

export const Price = styled.p`
    grid-column: 3;
    grid-row: 2;
    font-size: 12px;
    font-weight: 500;
    color: ${colors.PastelBlue};
`;
