import styled from "styled-components";
import BackgoundSideBar from "../../assets/images/bg-sidebar-desktop.svg";
import BackgoundSideBarMobile from "../../assets/images/bg-sidebar-mobile.svg";
import devices from "../../constants/devices";

export const Container = styled.div`
    background-image: url(${BackgoundSideBar});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    grid-column: 1;
    grid-row: 1 2;

    @media ${devices.md} {
        display: flex;
        flex-direction: row;
        background-image: url(${BackgoundSideBarMobile});
        background-repeat: no-repeat;
        background-size: cover;
        grid-row: 1;
        border-radius: 0;
        justify-content: center;
    }
`;
