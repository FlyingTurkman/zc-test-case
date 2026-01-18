import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";










export default function H2 ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) {
    return (
        <h2
        className={cn(className)}
        {...props}
        />
    )
}