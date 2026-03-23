import { InputHTMLAttributes, forwardRef } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
label: string;
error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
({ label, error, ...props }, ref) => {
return (
<div className="flex flex-col gap-1 w-full">
<label className="text-sm font-medium text-slate-700">
{label}
</label>
<input
ref={ref}
className={`p-2 border rounded-lg outline-none transition-all focus:ring-2
${error
? 'border-red-500 focus:ring-red-200'
: 'border-slate-300 focus:ring-blue-200'
}`}
{...props}
/>
{error && (
<span className="text-xs text-red-500 font-medium">
{error}
</span>
)}
</div>
);
}
);
Input.displayName = 'Input';