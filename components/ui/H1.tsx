import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";










export default function H1 ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) {
    return (
        <h1
        className={cn(className)}
        {...props}
        />
    )
}