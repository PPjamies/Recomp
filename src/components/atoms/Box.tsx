import React from 'react';

type Props = {
    children?: React.ReactNode
    className?: string;
};

const Box: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`inline-block ${className}`}>
            {children}
        </div>
    )
}

export default Box;