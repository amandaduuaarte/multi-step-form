import { styled } from "styled-components";
import colors from "../../styles/colors";
import devices from "../../constants/devices";

export const Container = styled.div`
    grid-row: 1;
    grid-column: 2;
    display: grid;
    height: 80vh;
    grid-template-columns: 50vw;
    grid-template-rows: 10vh 40vh 30vh;
    margin-left: 10%;
    align-items: center;
    justify-content: center;
    align-content: center;

    @media ${devices.md} {
        padding: 0;
        margin: 0;
        width: 100vw;
        height: 75vh;
        align-items: center;
        grid-template-columns: 100vw;
        grid-template-rows: 60vh 30vh;
        grid-row: 2;
        grid-column: 1;
    }
`;

export const Content = styled.div`
    grid-column: 1;
    grid-row: 2;

    @media ${devices.md} {
        background: ${colors.white};
        border: 1px solid ${colors.white};
        border-radius: 16px;
        grid-row: 1;
        height: 70vh;
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
    margin-bottom: 20px;
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
    margin-top: 5%;
    width: 80%;
    height: 25vh;
    align-items: center;

    @media ${devices.md} {
        align-items: center;
        height: 30vh;
        width: 100%;
        margin: 0;
        padding: 0;
    }
`;

export const ContainerButtons = styled.div`
    grid-column: 1;
    grid-row: 3;
    display: flex;
    justify-content: space-between;
    width: 80%;

    @media ${devices.md} {
        grid-column: 1/2;
        width: 100vw;
        grid-row: 3;
        background: ${colors.white};
    }
`;

export const ContentButton = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 20%;

    @media ${devices.md} {
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 32px;
        width: 100vw;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-top: 5%;
    flex-wrap: wrap;
    align-items: center;

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

export const CheckboxContainer = styled.div`
    width: 80%;
    height: 35vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

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
