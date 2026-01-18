import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";










export default function H4 ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) {
    return (
        <h4
        className={cn(className)}
        {...props}
        />
    )
}