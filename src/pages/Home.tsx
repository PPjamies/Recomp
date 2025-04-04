import React from 'react';

import Box from '../atoms/Box.tsx'
import Stack from '../atoms/Stack.tsx';
import Queue from '../atoms/Queue.tsx'

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
        </Box>
    );
}

export default Home;