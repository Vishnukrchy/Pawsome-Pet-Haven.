import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export const Link = ({ href, children, active }: LinkProps) => {
  return (
    <a 
      href={href} 
      className={`hover:text-purple-600 transition-colors ${
        active ? 'text-purple-600 font-medium' : ''
      }`}
    >
      {children}
    </a>
  );
};