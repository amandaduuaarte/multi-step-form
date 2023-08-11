import { styled } from "styled-components";
import colors from "../../styles/colors";
import devices from "../../constants/devices";

export const Container = styled.div`
    width: 30vw;
    height: 10vh;
    border-radius: 8px;
    border: 1px solid ${colors.LightGray};
    display: grid;
    grid-template-columns: 4vw 20vw 2vw;
    grid-template-rows: 3vh 4vh;

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
        grid-template-rows: 3vh 4vh;
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
        margin-top: 2%;
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
