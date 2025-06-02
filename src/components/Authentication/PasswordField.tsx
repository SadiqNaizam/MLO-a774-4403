import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id:string;
  label: string; // Used for aria-label
}

const PasswordField: React.FC<PasswordFieldProps> = ({ id, label, className, placeholder, ...props }) => {
  return (
    <Input
      id={id}
      type="password"
      aria-label={label}
      placeholder={placeholder || label}
      className={cn(
        "flex h-10 w-full rounded-lg border border-input bg-card px-3 py-2 text-sm text-card-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};

export default PasswordField;
