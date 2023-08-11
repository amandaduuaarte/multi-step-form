import { styled } from "styled-components";
import colors from "../../styles/colors";
import devices from "../../constants/devices";

interface DescriptionProps {
    row?: number;
    column?: number;
    color?: string;
    bold?: boolean;
    size?: number;
}

export const Container = styled.div`
    height: 36vh;
    width: 65%;
    border-radius: 12px;
    /* background: red; */
    padding: 0 20px;
    @media ${devices.md} {
        height: 30vh;
        width: 90%;
    }
`;

export const Body = styled.div`
    background: ${colors.Magnolia};
    border-radius: 12px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 10% 35% 30% 35%;
    grid-template-rows: 4vh 3vh 4vh;
    padding: 2px 10px;

    @media ${devices.md} {
        grid-template-columns: 2% 44% 30% 35%;
        grid-template-rows: 4vh 3vh 4vh;
    }
`;

export const Title = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: ${colors.MarineBlue};
    grid-column: 2;
`;

export const Description = styled.p<DescriptionProps>`
    grid-row: ${({ row }) => row || 1};
    grid-column: ${({ column }) => column || 2};
    font-size: ${({ size }) => size || 14}px;
    font-weight: ${({ bold }) => (bold ? 700 : 400)};
    color: ${({ color }) => color || colors.CoolGray};

    @media ${devices.md} {
        font-size: 16px;
    }
`;

export const Line = styled.div`
    grid-row: 2;
    width: 80%;
    margin: 0 6%;
    height: 1px;
    background: ${colors.CoolGray};
`;
