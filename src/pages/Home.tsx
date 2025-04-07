import React from 'react';

import Box from '../components/atoms/Box.tsx'
import Stack from '../components/atoms/Stack.tsx';
import Queue from '../components/atoms/Queue.tsx'
import Avatar from "../components/elements/Avatar.tsx";
import Image from "../components/atoms/Image.tsx";
import {AvatarSize} from "../constants/AvatarSize.ts";

const Home = () => {
    return (
        <Box className={'bg-amber-500'}>
            <h1>I am inside the box</h1>
            <Stack className={'bg-pink-400'}>
                <p>I</p>
                <p>am</p>
                <p>in</p>
                <p>stack</p>
            </Stack>
            <Queue className={'bg-green-700 gap-5'}>
                <p>I</p>
                <p>am</p>
                <p>in</p>
                <p>queue</p>
            </Queue>

            {/* Images */}
            <Image src={'src/assets/avatar-img.png'} alt={'hello'}/>
            <Avatar name={'Jessie Pinkman'} src={'src/assets/avatar-img.png'} size={AvatarSize.md}/>
        </Box>
    );
}

export default Home;