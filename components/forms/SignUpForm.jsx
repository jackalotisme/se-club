import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NameField } from "../ui/nameField";
import { EmailField } from "../ui/emailField";
import { Button } from "../ui/button";
import { SubmitButton } from "../ui/submitButton";
const SignUpForm = React.forwardRef((placeHolder, ref) => {
    const [ValidName, setValidName] = useState(false);
    const [ValidEmail, setValidEmail] = useState(false);
    const [GetSubmitStatus, setSubmitStatus] = useState(false);

    function changeNameState(TrueOrFalse) {
        if (TrueOrFalse === true) {
            setValidName(true);
        } else {
            setValidName(false);
        }
    }
    function compareBoth() {
        let result = false;
        if (ValidEmail === true && ValidName === true) {
            setSubmitStatus(true);
        }
    }
    function changeEmailState(TrueOrFalse) {
        if (TrueOrFalse === true) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    }
    return (
        (
            <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                    <NameField
                        changeParentState={changeNameState}
                        placeholder="Your Name"
                        required
                    ></NameField>
                    <EmailField
                        changeParentState={changeEmailState}
                        placeholder="Your Email"
                        required
                    ></EmailField>

                    <SubmitButton
                        canSubmit={GetSubmitStatus}>Submit</SubmitButton>
                </form>
            </div>)
    );
})

export { SignUpForm }
