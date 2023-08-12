import React, { ReactNode, createContext, useContext, useState } from "react";

interface FormStepProviderProps {
    children: ReactNode;
}

interface useFormStepData {
    handleNextStep: () => void;
    handleBeforeStep: () => void;
    step: number;
}

const FormStepContext = createContext<useFormStepData>({} as useFormStepData);

// eslint-disable-next-line react/function-component-definition
const FormStepProvider: React.FC<FormStepProviderProps> = ({ children }) => {
    const [step, setStep] = useState<number>(1);

    const handleNextStep = (): void => {
        if (step === 4) {
            setStep(1);
        } else {
            setStep(step + 1);
        }
    };
    const handleBeforeStep = (): void => {
        setStep(step - 1);
    };

    return (
        <FormStepContext.Provider
            value={{
                handleNextStep,
                handleBeforeStep,
                step,
            }}
        >
            {children}
        </FormStepContext.Provider>
    );
};

function useFormStep(): useFormStepData {
    const context = useContext(FormStepContext);
    return context;
}

export { FormStepProvider, useFormStep };
