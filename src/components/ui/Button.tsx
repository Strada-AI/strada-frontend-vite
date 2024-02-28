import React from 'react';
import { Button as NextUIButton } from "@nextui-org/react";

interface ButtonProps {
    className?: string;
    value: string;
}

export const Button = ({ className, value }: ButtonProps) => {
    return (
        <NextUIButton className={`px-unit-2 py-unit-1 min-w-unit-3xl ${className}`}>
            {value}
        </NextUIButton>
    );
};
