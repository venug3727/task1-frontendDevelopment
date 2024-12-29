import React from 'react';
import { CloudOff } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-red-500 space-y-4">
      <CloudOff className="w-16 h-16" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}