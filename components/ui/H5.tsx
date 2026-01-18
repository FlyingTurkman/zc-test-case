import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";










export default function H5 ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) {
    return (
        <h5
        className={cn(className)}
        {...props}
        />
    )
}