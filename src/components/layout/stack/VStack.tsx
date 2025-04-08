import React from 'react';

export type Props = {
    children: React.ReactNode
    className?: string;
}

const VStack: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`flex flex-col w-fit h-fit ${className}`}>
            {children}
        </div>
    );
}

export default VStack;