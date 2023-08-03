import { styled } from "styled-components";

import colors from "../../styles/colors";
import devices from "../../constants/devices";

export const Container = styled.div`
    background: ${colors.white};
    margin: 5% 0;
    height: 80vh;
    width: 70vw;
    border-radius: 16px;
    padding: 32px 16px 16px 16px;
    display: grid;
    grid-template-columns: 300px 80%;

    @media ${devices.md} {
        height: 100vh;
        width: 100vw;
        grid-template-rows: 30% 70%;
        grid-template-columns: 100%;
        background: none;
        margin: 0;
        padding: 0;
    }
`;
