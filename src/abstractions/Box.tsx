import React from 'react';
import {Props} from './types.ts';

const Box: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`inline-block ${className}`}>
            {children}
        </div>
    )
}

export default Box;