import type { Meta, StoryObj } from "@storybook/react";
import SideBarDocs from "./Docs/SideBar";

export default {
    title: "Components/SideBar",
    component: SideBarDocs,
    args: {
        status: 1,
    },
} as Meta;

export const Step1: StoryObj = {
    args: {
        status: 1,
    },
};

export const Step2: StoryObj = {
    args: {
        status: 2,
    },
};
