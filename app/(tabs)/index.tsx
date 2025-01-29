import { VStack } from '@/components/ui/vstack';
import React from 'react';
import { Typography } from '@/components';

const Home = () => {

  return (
    <VStack className='flex-1 items-center justify-center'>
      <Typography className='text-2xl font-bold text-green-800'>Home</Typography>
    </VStack>
  )
};

export default Home;