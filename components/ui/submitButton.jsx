import * as React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react";

const SubmitButton = React.forwardRef(({ className, placeholder, canSubmit }, ref) => {
    console.log("text")
    if (canSubmit) {
        return (
            (<><input
                type="submit"
                className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                placeholder="Submit button"
                ref={ref}
                id={"SignUp"}
                disabled={false}
            />
            </>
            )
        );
    }
})

export { SubmitButton }