import styled from "styled-components";
import BackgoundSideBar from "../../assets/images/bg-sidebar-desktop.svg";
import devices from "../../constants/devices";

export const Container = styled.div`
    background-image: url(${BackgoundSideBar});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 24px;

    @media ${devices.sm} {
        flex-direction: row;
        justify-content: center;
        padding: 12px;
        background: none;
    }
`;
