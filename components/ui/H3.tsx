import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";










export default function H3 ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) {
    return (
        <h3
        className={cn(className)}
        {...props}
        />
    )
}