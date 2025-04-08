import React from 'react';
import Circle from '../layout/Circle.tsx';
import Image from './Image.tsx';
import {AvatarSize} from '../../constants/AvatarSize.ts';

type Props = {
    name: string,
    src: string,
    size?: AvatarSize,
};

const Avatar: React.FC<Props> = ({
                                     name,
                                     src,
                                     size = AvatarSize.sm
                                 }) => {
    return (
        <Circle size={size}>
            <Image alt={name} src={src}/>
        </Circle>
    );
}

export default Avatar;