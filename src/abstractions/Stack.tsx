import React from 'react';
import {Props} from './types.ts';

const Stack: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
}

export default Stack;