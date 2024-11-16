import * as React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SubmitButton = React.forwardRef(({ className, placeholder, canSubmit }, ref) => {
    if (canSubmit) {
        return (
            (<><button
                type="submit"
                className={cn(
                    "flex h-9 w-full rounded-md border border-input mx-auto bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                placeholder={placeholder}
                ref={ref}
                id={"SignUp"}
                disabled={false}
                >Submit</button>
            </>
            )
        );
    }
})

export { SubmitButton }
