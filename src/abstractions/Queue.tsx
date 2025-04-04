import React from 'react';
import {Props} from './types.ts';

const Queue: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`flex flex-row ${className}`}>
            {children}
        </div>
    )
}

export default Queue;