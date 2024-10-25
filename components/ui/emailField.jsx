import * as React from "react"

import { cn } from "@/lib/utils"
import { Input, stringify } from "postcss";

const EmailField = React.forwardRef(({ className, placeholder }, ref) => {
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
    function validateText(text) {
        let result = checkInvalidCharacters(text);

    }
    function handleChange(e) {
        let text = e.target.value;
        validateText(text);
    }
    return (
        (<input
            type="email"
            className={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            ref={ref}
            placeholder={placeholder}
            onChange={handleChange} />)
    );
})

export { EmailField }
