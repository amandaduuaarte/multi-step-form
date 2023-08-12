import React from "react";

import Form from "./pages/Form";
import GlobalStyle from "./styles/globalStyles";
import { FormStepProvider } from "./hooks/useFormStep";

function App() {
    return (
        <FormStepProvider>
            <GlobalStyle />
            <Form />
        </FormStepProvider>
    );
}

export default App;
