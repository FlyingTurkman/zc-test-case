import type { HTMLAttributes } from "react"
import { cn } from "../../lib/cn"





type CardProps = HTMLAttributes<HTMLDivElement>





export default function Card({ children, className, ...props }: CardProps) {

    return (
        <div
        className={cn("card d-flex flex-lg-row flex-col align-items-start gap-2 bg-white p-3", className)}
        {...props}
        >
            {children}
        </div>
    )
}



function CardContent({ children, className, ...props }: CardProps) {
    return (
        <div
        className={cn("d-flex flex-col gap-2 w-100", className)}
        {...props}
        >
            {children}
        </div>
    )
}

function CardImage({ children, className, ...props }: CardProps) {
    return (
        <div
        className={cn("d-flex w-100", className)}
        {...props}
        >
            {children}
        </div>
    )
}


Card.Content = CardContent
Card.Image = CardImage 