import styled from "styled-components";
import colors from "../../styles/colors";

interface ContainerProps {
    isActive?: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: ${({ isActive }) =>
        isActive ? colors.Magnolia : colors.white};
    display: grid;
    justify-content: space-between;
    height: 18vh;
    width: 8vw;
    border-radius: 16px;
    grid-template-rows: 70% 30%;
    padding: 20px;
    border: 1px solid
        ${({ isActive }) => (isActive ? colors.PurplishBlue : colors.LightGray)};
    cursor: pointer;
    &:hover {
        background: ${colors.Magnolia};
        border-color: ${colors.PurplishBlue};
    }
`;

export const IconContainer = styled.div`
    align-self: flex-start;
`;

export const Icon = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;

export const TextContainer = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 16px;
        color: ${colors.MarineBlue};
        font-weight: 500;
        margin: 0;
    }

    p {
        font-size: 12px;
        color: ${colors.CoolGray};
        font-weight: 400;
        margin-top: 8%;
    }
`;
