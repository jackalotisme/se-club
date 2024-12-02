import * as React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SubmitButton = React.forwardRef(({ className, placeholder, canSubmit }, ref) => {
    if (canSubmit()) {
        return (
            (<><button
                type="submit"
                className={cn(
                    "z-10 bg-primary w-20 h-9 px-4 py-2 mx-auto text-primary-foreground shadow hover:bg-primary/90",
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
