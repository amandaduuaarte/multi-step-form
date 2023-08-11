import { styled } from "styled-components";

import colors from "../../styles/colors";
import devices from "../../constants/devices";

export const Container = styled.div`
    background: ${colors.white};
    margin: 5% 0;
    border-radius: 16px;
    padding: 32px 16px 16px 16px;
    display: grid;
    grid-template-columns: 300px 50vw;
    grid-template-rows: 80vh;

    @media ${devices.md} {
        background: ${colors.Magnolia};
        grid-template-rows: 30vh 50vh;
        grid-template-columns: 101vw;
        margin: 0;
        padding: 0;
    }

    @media ${devices.sm} {
        grid-template-rows: 30vh 80vh;
        grid-template-columns: 101vw;
        margin: 0;
        padding: 0;
    }
`;
