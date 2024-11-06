import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils"

const SignUpForm = React.forwardRef((ref) => {
    return (
        (<div className="w-full max-w-sm space-y-2">
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
                <Button type="submit" id="SignUp">
                    Sign Up
                </Button>
            </form>
        </div>)
    );
})

export { SignUpForm }
