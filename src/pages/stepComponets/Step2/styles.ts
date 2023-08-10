import { styled } from "styled-components";
import devices from "../../../constants/devices";
import colors from "../../../styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin: 6%;
    width: 70%;
    align-content: center;
    align-items: center;

    @media ${devices.md} {
        padding: 0;
        margin: 0;
        background: ${colors.Alabaster};
        align-items: center;
        align-self: center;
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;

    @media ${devices.md} {
        flex-direction: column;
        align-items: center;
        background: ${colors.white};
        border: 1px solid ${colors.white};
        border-radius: 16px;
        height: 80%;
        width: 100%;
    }
`;
