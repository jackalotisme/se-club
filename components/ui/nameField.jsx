import * as React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react";
import { Input } from "postcss";

const NameField = React.forwardRef(({ className, placeholder }, ref) => {
    const [getText, setText]= useState("");
    function handleChange (e) {
        setText({value: e.target.value});
        console.log(getText);
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
