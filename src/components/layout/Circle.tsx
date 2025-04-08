import React, {ReactNode} from 'react';

type Props = {
    children?: ReactNode,
    className?: string,
    size: number,
    onClick?: () => void
};

const Circle: React.FC<Props> = ({
                                     children,
                                     className,
                                     size,
                                     onClick
                                 }) => {
    return (
        <div
            className={`rounded-full overflow-hidden ${className}`}
            style={{
                width: `${size}px`,
                height: `${size}px`
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Circle;