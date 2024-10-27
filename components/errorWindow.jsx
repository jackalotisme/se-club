import * as React from "react"

import { cn } from "@/lib/utils"
import { Input, stringify } from "postcss";

const ErrorWindow = React.forwardRef(({ ErrorTitle, ErrorDescription }, ref) => {
    if (ErrorTitle.length > 0) {
        return (
            (
                <div class="flex flex-col bg-gradient-to-tr from-sky-200 to-violet-700 border-radius: 15px text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">{ErrorTitle}</strong>
                    <span class="block:inline">{ErrorDescription}</span>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    </span>
                </div>
            )
        );
    }
})

export { ErrorWindow }
