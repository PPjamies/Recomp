import React from 'react';

export type Props = {
    children: React.ReactNode
    className?: string;
}

const HSpan: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`flex flex-row ${className}`}>
            {children}
        </div>
    )
}

export default HSpan;