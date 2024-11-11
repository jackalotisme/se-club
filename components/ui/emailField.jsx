import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input";
import { ErrorWindow } from "./errorWindow";
import { useState } from "react";

const EmailField = React.forwardRef(({ className, placeholder, changeParentState }, ref) => {
    const [errorType, setErrorType] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    function checkInvalidCharacters(text) {
        /*, Less strict than name, whats allowed should be:
    special characters: ! _ =  except @ 
    One @ symbol: @gmail.com
    */
        let count = 0;
        let containsNonvalidChar = false;
        let keepGoing = true;
        let atSymbolCount = 0;
        while (containsNonvalidChar == false && keepGoing == true) {
            if (text[count] == "@") {
                atSymbolCount++
            }
            if (text.length == 0) {
                containsNonvalidChar = true;
            }
            else {
                //source for email list, this is before the @ sign 
                //https://ladedu.com/valid-characters-for-email-addresses-the-complete-list/#Characters-Special-Characters-and-Symbols-Allowed-in-an-Email-Address
                switch (text[count]) {
                    case "&":
                    case "(":
                    case ")":
                    case "[":
                    case "]":
                    case "\\":
                    case ":":
                    case ";":
                    case '"':
                    case ">":
                    case "<":
                    case ",":
                        containsNonvalidChar = true;
                }
            }
            if (count > text.length) {
                keepGoing = false;
            }
            if (atSymbolCount > 1) {
                containsNonvalidChar = true;
            }
            count++;
        }
        if (containsNonvalidChar) {
            console.log("invalid character fix that!");

        }
        return containsNonvalidChar;
    }
    function checkValidName(text) {
        let valid = false;
        switch (text.toLowerCase()) {
            case "a":
                valid = true;
                break;
            case "b":
                valid = true;
                break;
            case "c":
                valid = true;
                break;
            case "d":
                valid = true;
                break;
            case "e":
                valid = true;
                break;
            case "f":
                valid = true;
                break;
            case "g":
                valid = true;
                break;
            case "h":
                valid = true;
                break;
            case "i":
                valid = true;
                break;
            case "j":
                valid = true;
                break;
            case "k":
                valid = true;
                break;
            case "l":
                valid = true;
                break;
            case "m":
                valid = true;
                break;
            case "n":
                valid = true;
                break;
            case "o":
                valid = true;
                break;
            case "p":
                valid = true;
                break;
            case "q":
                valid = true;
                break;
            case "r":
                valid = true;
                break;
            case "s":
                valid = true;
                break;
            case "t":
                valid = true;
                break;
            case "u":
                valid = true;
                break;
            case "v":
                valid = true;
                break;
            case "w":
                valid = true;
                break;
            case "x":
                valid = true;
                break;
            case "y":
                valid = true;
                break;
            case "z":
                valid = true;
                break;
            case "1":
                valid = true;
                break;
            case "2":
                valid = true;
                break;
            case "3":
                valid = true;
                break;
            case "4":
                valid = true;
                break;
            case "5":
                valid = true;
                break;
            case "6":
                valid = true;
                break;
            case "7":
                valid = true;
                break;
            case "8":
                valid = true;
                break;
            case "9":
                valid = true;
                break;
            case "0":
                valid = true;
                break;
            case ".":
                valid = true;
                break;
            case "?":
                valid = true;
                break;
            case "!":
                valid = true;
                break;
            case "{":
                valid = true;
                break;
            case "}":
                valid = true;
                break;
            case "~":
                valid = true;
                break;
            case "-":
                valid = true;
                break;
            case "_":
                valid = true;
                break;
            case "+":
                valid = true;
                break;
            case "/":
                valid = true;
                break;
            case "=":
                valid = true;
                break;
            case "%":
                valid = true;
                break;
            case "$":
                valid = true;
                break;
            case "#":
                valid = true;
                break;
            case "$":
                valid = true;
                break;
            case "#":
                valid = true;
                break;
            case "'":
                valid = true;
                break;
            case "`":
                valid = true;
                break;
            case "|":
                valid = true;
                break;
            case "^":
                valid = true;
                break;
            case "*":
                valid = true;
                break;
            default:
                valid = false;
                break;
        }
        return valid;
    }
    function validateText(text) {
        if (text.length >= 4) {
            let result = checkInvalidCharacters(text);
            if (result == false) {
                //source for email list, this is before the @ sign 
                //https://ladedu.com/valid-characters-for-email-addresses-the-complete-list/#Characters-Special-Characters-and-Symbols-Allowed-in-an-Email-Address
                let test = text.split("@");
                let count = 0;
                let element = test[0];
                do {
                    result = checkValidName(element[count]);
                    count++;
                } while (result === true && count < text[0].length);
                if (result == true) {
                    console.log("Valid Email Name")
                    setErrorDescription("");
                    setErrorType("");
                    changeParentState(true);
                }
                else {
                    setErrorDescription("Invalid Email Name, please check your email.");
                    setErrorType("Invalid Email Name");
                    changeParentState(false);
                }
            }
            else {
                setErrorDescription("Invalid characters, please check your email.");
                setErrorType("Invalid Characters");
                changeParentState(true);
            }
        }
        else {
            setErrorType("Length")
            setErrorDescription("Please type out the rest of the email, or try another email");
            changeParentState(false);
        }
    }
    function handleChange(e) {
        let text = e.target.value;
        validateText(text);
    }
    return (
        (<><Input
            type="email"
            className={cn(
                "flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            ref={ref}
            placeholder={placeholder}
            onChange={handleChange} />
            <ErrorWindow ErrorTitle={errorType}
                ErrorDescription={errorDescription}></ErrorWindow>
        </>
        )
    );
})

export { EmailField }
