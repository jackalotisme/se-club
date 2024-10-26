import * as React from "react"

import { cn } from "@/lib/utils"
import { Input, stringify } from "postcss";
import { ErrorWindow } from "../errorWindow";

const NameField = React.forwardRef(({ className, placeholder }, ref) => {
    function validateText(text) {
        /*Only text, does not contain
         *  any numbers
         * special characters, ie: ! @ #"
         */
        let count = 0;
        let containsNonvalidChar = false;
        let keepGoing = true;
        while (containsNonvalidChar == false && keepGoing == true) {
            if (parseInt(text[count]) >= 0 || text.length == 0) {
                containsNonvalidChar = true;
            }
            else {
                switch (text[count]) {
                    case "`":
                    case "~":
                    case "!":
                    case "@":
                    case "#":
                    case "$":
                    case "%":
                    case "^":
                    case "&":
                    case "*":
                    case "(":
                    case ")":
                    case "-":
                    case "_":
                    case "+":
                    case "=":
                    case "{":
                    case "[":
                    case "}":
                    case "]":
                    case "\\":
                    case "|":
                    case ":":
                    case ";":
                    case '"':
                    case "'":
                    case "?":
                    case "/":
                    case ">":
                    case "<":
                    case ",":
                    case ".":
                        containsNonvalidChar = true;
                }
            }
            if (count > text.length) {
                keepGoing = false;
            }
            count++;
        }
        if (containsNonvalidChar) {
            console.log("invalid character fix that!");
        }
    }
    function handleChange(e) {
        let text = e.target.value;
        validateText(text);
    }
    return (
        (<input
            type="text"
            className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            ref={ref}
            placeholder={placeholder}
            onChange={handleChange} />)
    );
})

export { NameField }
