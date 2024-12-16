import React from 'react';
import { ClassValue } from 'clsx';

interface PromiseButtonProps {
    onClickPromise: () => Promise<void>;
    label: string | JSX.Element;
    confirm?: boolean;
    className?: string;
    disabled?: boolean;
    loadingComponent?: React.ReactNode;
    successComponent?: React.ReactNode;
    errorComponent?: React.ReactNode;
    confirmComponent?: React.ReactNode;
    backgroundColor?: string;
    loadingBackgroundColor?: string;
    successBackgroundColor?: string;
    errorBackgroundColor?: string;
}
declare const PromiseButton: React.FC<PromiseButtonProps>;

declare function cn(...inputs: ClassValue[]): string;

export { PromiseButton, cn };
