import { styled } from "styled-components";
import colors from "../../styles/colors";
import devices from "../../constants/devices";

export const Container = styled.div`
    background: ${colors.white};
    margin: 5% 0;
    height: 80vh;
    width: 55vw;
    border-radius: 16px;
    padding: 16px;
    display: grid;
    grid-template-columns: 300px 70%;

    @media ${devices.sm} {
        display: flex;
        flex-direction: row;
        background: red;
    }
`;
