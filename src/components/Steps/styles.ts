import styled, { css } from "styled-components";
import colors from "../../styles/colors";
import devices from "../../constants/devices";

interface StepStatusIndicatorProps {
    isActive: boolean;
}

export const Container = styled.div`
    display: flex;
    padding: 24px 0;

    @media ${devices.md} {
        justify-content: center;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 16px;

    @media ${devices.sm} {
        flex-direction: row;
        margin: 0 8px;
    }
`;

export const StepStatusText = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: ${colors.LightGray};
    text-transform: uppercase;
    margin-bottom: 4px;

    @media ${devices.sm} {
        display: none;
        font-size: 8px;
    }
`;

export const StepTitleText = styled.p`
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    color: ${colors.white};
    margin: 0;

    @media ${devices.sm} {
        display: none;
    }
    @media ${devices.md} {
        font-size: 12px;
    }
`;

export const StepStatusIndicator = styled.div<StepStatusIndicatorProps>`
    display: flex;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: ${colors.white};
    margin-top: 4px;
    border: 1px solid;
    background: "transparent";
    border-color: 1px solid ${colors.Alabaster};

    ${({ isActive }) =>
        isActive &&
        css`
            background-color: ${colors.PastelBlue};
            border: none;
            color: ${colors.MarineBlue};
        `};

    @media ${devices.sm} {
        height: 30px;
        width: 30px;
    }
`;
