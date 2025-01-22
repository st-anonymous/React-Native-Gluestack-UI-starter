import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import React from 'react';

const Home = () => {

  return (
    <VStack className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold text-green-800' >Home</Text>
    </VStack>
  )
};

export default Home;