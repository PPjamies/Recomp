import React from 'react';

export type Props = {
    children: React.ReactNode
    className?: string;
}

const VSpan: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
}

export default VSpan;