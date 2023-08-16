import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

export default {
    title: "Components/Button",
    component: Button,
    args: {
        label: "Next Step",
    },
} as Meta;

export const Primary: StoryObj = {
    args: {
        label: "Next Step",
    },
};

export const Secondary: StoryObj = {
    args: {
        label: "Go back",
        secondaryBottom: true,
    },
};
