import { type HTMLAttributes } from "react"
import { cn } from "../../lib/cn"





export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
    variant?: 'primary' | 'secondary' | 'teal' | 'orange' | 'green'
}





export default function Badge( { className, variant = 'primary', ...props }: BadgeProps) {
    return (
        <div
        className={cn("py-px px-2 rounded-pill", className, {
            "bg-[#1a1a1a]": variant == 'primary',
        })}
        {...props}
        />
    )
}