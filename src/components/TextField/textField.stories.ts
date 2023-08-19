import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./Docs/TextField";

export default {
    title: "Components/TextField",
    component: TextField,
    args: {
        label: "Default",
        name: "Default",
        placeholder: "Default Placeholder",
        value: "Default",
    },
    parameters: {
        docs: {
            description: {
                component:
                    "A TextField component is used for capturing user input...",
            },
            notes: "Make sure to handle input validation and errors properly...",
        },
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
