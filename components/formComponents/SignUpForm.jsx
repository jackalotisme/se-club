import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NameField } from "./Fields/nameField";
import { EmailField } from "./Fields/emailField";
import { Button } from "../ui/button";
import { SubmitButton } from "./submitButton";
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
            result = true;
        }
        return result;
    }
    function changeEmailState(TrueOrFalse) {
        if (TrueOrFalse === true) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    }
    // For the reset button!
    function ResetState() {
        setValidName(false);
        setValidEmail(false);
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
                    <input
                        className={cn(
                            "flex h-9 w-full rounded-md border border-input mx-auto bg-red-500 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        )}
                        type="reset" value="Reset"
                        onClick={ResetState}></input>
                    <SubmitButton
                        canSubmit={compareBoth}>Submit</SubmitButton>
                </form>
            </div>)
    );
})

export { SignUpForm }
