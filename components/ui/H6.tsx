import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";










export default function H6 ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) {
    return (
        <h6
        className={cn(className)}
        {...props}
        />
    )
}