import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NameField } from "../ui/nameField";
import { EmailField } from "../ui/emailField";
import { Button } from "../ui/button";
import { SubmitButton } from "../ui/submitButton";
const SignUpForm = React.forwardRef((placeHolder, ref) => {
    const { getValidForm, setValidForm } = useState(false);
    function changeState(TrueOrFalse) {
        if (TrueOrFalse === true) {
            setValidForm === false;
        } else {
            setValidForm === true;
        }
    }
    return (
        (
            <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                    <NameField
                        changeParentState={changeState}
                        placeholder="Your Name"
                        required
                    ></NameField>
                    <EmailField
                        changeParentState={changeState}
                        placeholder="Your Email"
                        required
                    ></EmailField>
                    <SubmitButton>Submit</SubmitButton>
                </form>
            </div>)
    );
})

export { SignUpForm }
