import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout provides the outermost structure for application pages.
 * It applies a full-screen background and centers its children content,
 * consistent with the overall layout requirements for the authentication context.
 * The styling 'h-screen bg-background flex items-center justify-center' is derived
 * from the 'Layout Requirements.overall.definition'.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'h-screen bg-background flex items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainAppLayout;
