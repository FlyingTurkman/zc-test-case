import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";



export type ToggleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> 


export const toggleButtonVariants = ({ className }: { className?: string }) => {
  return cn("tgl d-flex flex-row align-items-center justify-content-center", className)
}


export default function ToggleButton( { className, disabled, ...props}: ToggleButtonProps ) {
    return (
        <button
        {...props}
        className={toggleButtonVariants({ className })}
        disabled={disabled}
        />
    )
}