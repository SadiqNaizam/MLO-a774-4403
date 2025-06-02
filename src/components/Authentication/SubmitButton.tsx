import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, isLoading, className, ...props }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={cn(
        "w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring rounded-lg",
        className
      )}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </Button>
  );
};

export default SubmitButton;
