import { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export function Button({ children, className, ...props }: ButtonProps) {
return (
<button
className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg
hover:bg-blue-700 transition-colors disabled:bg-slate-400
disabled:cursor-not-allowed ${className}`}
{...props}
>
{children}
</button>
);
}