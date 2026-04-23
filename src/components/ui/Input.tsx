import { cn } from '@/lib/utils';
import { type InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="text-editorial text-gray">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm font-body',
            'placeholder:text-muted transition-colors duration-300',
            'focus:border-white/60 focus:outline-none',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';
