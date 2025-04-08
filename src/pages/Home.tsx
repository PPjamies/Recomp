import React from 'react';

import Box from '../components/atoms/Box.tsx'
import VStack from '../components/stack/VStack.tsx';
import HStack from '../components/stack/HStack.tsx'
import Avatar from "../components/elements/Avatar.tsx";
import Image from "../components/atoms/Image.tsx";
import {AvatarSize} from "../constants/AvatarSize.ts";
import Tooltip from "../components/elements/Tooltip.tsx";

const Home = () => {
    return (
        <Box className={'bg-amber-500'}>
            <h1>I am inside the box</h1>
            <VStack className={'bg-pink-400'}>
                <p>I</p>
                <p>am</p>
                <p>in</p>
                <p>stack</p>
            </VStack>
            <HStack className={'bg-green-700 gap-5'}>
                <p>I</p>
                <p>am</p>
                <p>in</p>
                <p>queue</p>
            </HStack>

            {/* Images */}
            <Image src={'src/assets/avatar-img.png'} alt={'hello'}/>
            <Avatar name={'Jessie Pinkman'} src={'src/assets/avatar-img.png'} size={AvatarSize.md}/>

            {/* Tooltip */}
            <Tooltip text={'Click on me!'}>
                <Avatar name={'Jessie Pinkman'} src={'src/assets/avatar-img.png'} size={AvatarSize.md}/>
            </Tooltip>
        </Box>
    );
}

export default Home;