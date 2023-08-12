import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 24px;
    color: ${colors.MarineBlue};
    font-weight: 500;
`;

export const Description = styled.p`
    font-size: 14px;
    color: ${colors.MarineBlue};
    font-weight: 400;
    width: 60%;
    text-align: center;
`;

export const IconContainer = styled.div`
    align-self: center;
`;

export const Icon = styled.img``;
