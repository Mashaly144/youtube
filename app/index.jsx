import { Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View className='flex-1 items-center justify-center font-pblack text-3xl bg-green-500 '>
      <Text className='text-white'>Aoura App</Text>
      <StatusBar barStyle={'default'} />
      <Link href='/Home'>Home</Link>
    </View>
  );
};

export default Index;
