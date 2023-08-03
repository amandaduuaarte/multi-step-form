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

    @media ${devices.md} {
        display: flex;
        flex-direction: row;
        background-image: url(${BackgoundSideBarMobile});
        background-repeat: no-repeat;
        background-size: cover;
        height: 50%;
        border-radius: 0;
        align-items: center;
        justify-content: center;
    }
`;
