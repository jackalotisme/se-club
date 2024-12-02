import * as React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SubmitButton = React.forwardRef(({ className, placeholder, canSubmit }, ref) => {
    if (canSubmit()) {
        return (
            (<><Button
                type="submit"
                className={cn(
                    "z-10 w-20 inline-flex mx-auto whitespace-nowrap rounded-md text-sm font-medium transition-colors",
                    className
                )}
                placeholder={placeholder}
                ref={ref}
                id={"SignUp"}
                disabled={false}
            >Submit</Button>
            </>
            )
        );
    }
})

export { SubmitButton }
