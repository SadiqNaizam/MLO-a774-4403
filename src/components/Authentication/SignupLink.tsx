import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; 

interface SignupLinkProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const SignupLink: React.FC<SignupLinkProps> = ({ onClick, children, className }) => {
  return (
    <Button
      variant="link"
      onClick={onClick}
      className={cn(
        "text-sm font-normal text-muted-foreground hover:text-primary hover:no-underline p-0 h-auto",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default SignupLink;
