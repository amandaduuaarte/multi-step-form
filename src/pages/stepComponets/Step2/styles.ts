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
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;
