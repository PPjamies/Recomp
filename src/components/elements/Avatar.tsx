import React from 'react';
import Circle from '../atoms/Circle.tsx';
import Image from '../atoms/Image.tsx';
import {AvatarSize} from '../../constants/AvatarSize.ts';

type Props = {
    name: string,
    src: string,
    size?: AvatarSize,
};

//todo: onhover - tooltip, onclick - do something, hasBadge - show badge
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