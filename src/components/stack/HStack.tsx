import React from 'react';

export type Props = {
    children: React.ReactNode
    className?: string;
}

const HStack: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`flex flex-row w-fit h-fit ${className}`}>
            {children}
        </div>
    )
}

export default HStack;