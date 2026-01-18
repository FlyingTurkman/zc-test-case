import { type HTMLAttributes } from "react"
import { cn } from "../../lib/cn"





export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
    variant?: 'primary' | 'secondary' | 'teal' | 'orange' | 'green' | 'outline'
}





export default function Badge( { className, variant = 'primary', ...props }: BadgeProps) {
    return (
        <div
        className={cn( className, {
            "bdg-primary": variant == 'primary',
            "bdg-secondary": variant == 'secondary',
            "bdg-orange": variant == 'orange',
            "bdg-green": variant == 'green',
            "bdg-teal": variant == 'teal',
            "bdg-outline": variant == 'outline'
        })}
        {...props}
        />
    )
}