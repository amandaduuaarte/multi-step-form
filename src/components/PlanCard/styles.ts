import styled from "styled-components";
import colors from "../../styles/colors";
import devices from "../../constants/devices";

interface ContainerProps {
    isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: ${({ isActive }) =>
        isActive ? colors.Magnolia : colors.white};
    display: grid;
    border-radius: 16px;
    grid-template-rows: 12vh 4vh;
    grid-template-columns: 4vw 2vw;
    padding: 20px;
    margin-bottom: 12px;
    margin-right: 8px;
    border: 1px solid
        ${({ isActive }) => (isActive ? colors.PurplishBlue : colors.LightGray)};
    cursor: pointer;
    &:hover {
        background: ${colors.Magnolia};
        border-color: ${colors.PurplishBlue};
    }

    @media ${devices.xl} {
        align-self: center;
        justify-content: space-between;
        grid-template-rows: 3vh 3vh;
        grid-template-columns: 5vw 10vw 8vw;
    }
`;

export const IconContainer = styled.div`
    grid-column: 1 2;
    grid-row: 1 2;
    align-self: flex-start;

    @media ${devices.xl} {
        grid-template-rows: 1;
        grid-template-columns: 1;
    }
`;

export const Icon = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;

export const TextContainer = styled.div`
    grid-column: 1 2;
    grid-row: 2;

    @media ${devices.xl} {
        grid-column: 2;
        grid-row: 1;
    }
    h2 {
        font-size: 16px;
        color: ${colors.MarineBlue};
        font-weight: 500;
        margin: 0;

        @media ${devices.xl} {
            font-size: 20px;
        }
    }

    p {
        font-size: 12px;
        color: ${colors.CoolGray};
        font-weight: 400;
        margin-top: 8%;

        @media ${devices.xl} {
            font-size: 16px;
            margin-top: 3%;
        }
    }
`;
