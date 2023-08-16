import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./Docs/TextField";

export default {
    title: "Components/TextField",
    component: TextField,
    args: {
        label: "Default",
        name: "Default",
        placeholder: "Default Placeholder",
    },
} as Meta;

export const Active: StoryObj = {
    args: {
        label: "Name",
    },
};

export const Error: StoryObj = {
    args: {
        label: "Email",
        secondaryBottom: true,
        error: { message: "Please inform the user" },
    },
};
