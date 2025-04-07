import React from 'react';

type Props = {
    className?: string,
    src: string,
    alt: string,
}

const Image: React.FC<Props> = ({className, src, alt}) => {
    return (
        <img
            className={`w-full h-full object-cover ${className}`}
            src={src}
            alt={alt}/>
    );
}

export default Image;