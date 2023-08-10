import { styled } from "styled-components";
import colors from "../../../styles/colors";
import devices from "../../../constants/devices";

export const Container = styled.div`
    display: grid;
    flex-direction: column;
    grid-template-columns: 50vw;
    grid-template-rows: 40vh 30vh;
    padding: 32px;
    margin-left: 10%;
    align-items: center;
    justify-content: center;
    align-content: center;

    @media ${devices.md} {
        padding: 0;
        margin: 0;
        background: ${colors.Alabaster};
        align-items: center;
        grid-template-columns: 100vw;
        grid-template-rows: 20vh 30vh;
    }
`;

export const Content = styled.div`
    grid-column: 1;
    grid-row: 1;

    @media ${devices.md} {
        background: ${colors.white};
        border: 1px solid ${colors.white};
        border-radius: 16px;
        height: 45vh;
    }
`;

export const Title = styled.p`
    font-size: 32px;
    font-weight: 500;
    color: ${colors.MarineBlue};
    align-self: flex-start;
    margin: 0;

    @media ${devices.md} {
        padding: 64px 32px 0 32px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${colors.CoolGray};
    align-self: flex-start;
    margin-bottom: 24px;
    width: 64%;

    @media ${devices.md} {
        padding: 0 32px;
        width: 90%;
    }
`;

export const ContentInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85%;
    width: 80%;

    @media ${devices.md} {
        align-items: center;
        height: 60%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
`;

export const ContainerButtons = styled.div`
    grid-column: 1;
    grid-row: 2;
    display: flex;
    justify-content: space-between;
    width: 80%;

    @media ${devices.md} {
        grid-column: 1 2;
        width: 100vw;
        grid-row: 3;
    }
`;

export const ContentButton = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 20%;

    @media ${devices.md} {
        background: ${colors.white};
        align-items: center;
        margin: 30px 0 0 0;
        padding: 32px;
        width: 100vw;
        align-self: flex-end;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-top: 10%;
    flex-wrap: wrap;
    grid-column: 1;
    grid-row: 1;

    @media ${devices.md} {
        flex-direction: column;
        align-items: center;
        width: 100vw;
        margin-top: 0;
    }
    @media ${devices.lg} {
        flex-direction: column;
        align-items: center;
    }
`;

export const MonthSelectContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 1% 0;

    @media ${devices.md} {
        margin: 0;
    }
`;
