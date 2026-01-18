import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";


type ButtonVariants = 'primary' | 'secondary' | 'alternative' | 'danger'
type ButtonSizes = 'default' | 'icon'


export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariants,
    size?: ButtonSizes
}


export const buttonVariants = ({ variant = 'primary', size = 'default', disabled, className }: { variant?: ButtonVariants, size?: ButtonSizes, className?: string, disabled?: boolean }) => {
  return cn("btn", className, {
    "btn-disabled": disabled,
    "btn-primary": variant === "primary",
    "btn-secondary": variant === "secondary",
    "btn-alternative": variant === "alternative",
    "btn-danger": variant === "danger",
    "btn-icon": size === 'icon'
  });
};


export default function Button( { className, disabled, size = 'default', variant = 'primary', ...props}: ButtonProps ) {
    return (
        <button
        {...props}
        className={buttonVariants({ variant, size, disabled, className })}
        disabled={disabled}
        />
    )
}