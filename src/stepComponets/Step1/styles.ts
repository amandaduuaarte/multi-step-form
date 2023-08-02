import { styled } from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    margin-left: 32px;
    width: 100%;
`;

export const Title = styled.p`
    font-size: 32px;
    font-weight: 500;
    color: ${colors.MarineBlue};
    align-self: flex-start;
    margin: 0;
`;

export const Description = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${colors.CoolGray};
    align-self: flex-start;
    margin-bottom: 24px;
`;

export const ContentInputs = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 45%;
`;

export const ContentButton = styled.div`
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: right;
    width: 60%;
    margin: 64px;
`;
