import { cn } from '@/lib/utils';
import { type TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="text-editorial text-gray">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm font-body',
            'placeholder:text-muted transition-colors duration-300 resize-none',
            'focus:border-white/60 focus:outline-none',
            className
          )}
          rows={4}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
