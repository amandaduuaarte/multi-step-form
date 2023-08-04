import { styled } from "styled-components";
import colors from "../../../styles/colors";
import devices from "../../../constants/devices";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin-left: 6%;

    @media ${devices.md} {
        padding: 0;
        margin: 0;
        background: ${colors.Alabaster};
        align-items: center;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 45vh;

    @media ${devices.md} {
        background: ${colors.white};
        border: 1px solid ${colors.white};
        border-radius: 16px;
        height: 80%;
        width: 100%;
    }
`;

export const Title = styled.p`
    font-size: 32px;
    font-weight: 500;
    color: ${colors.MarineBlue};
    align-self: flex-start;
    margin: 0;

    @media ${devices.md} {
        padding: 12px 32px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${colors.CoolGray};
    align-self: flex-start;
    margin-bottom: 24px;
    width: 64%;
    flex-wrap: wrap;

    @media ${devices.md} {
        padding: 0 32px;
        width: 90%;
    }
`;

export const ContentInputs = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
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

export const ContentButton = styled.div`
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: right;
    width: 60%;
    margin-top: 64px;

    @media ${devices.md} {
        background: ${colors.white};
        align-items: center;
        margin: 30px 0 0 0;
        padding: 32px 64px 32px 32px;
        width: 100vw;
        align-self: flex-end;
    }
`;
