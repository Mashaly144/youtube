import { Image, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
const Index = () => {
  return (
    <SafeAreaView className='h-full bg-primary '>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full min-h-[85vh] items-center justify-center px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-white text-center text-3xl font-pbold'>
              Discover Endless Possibilities with{' '}
              <Text className='text-secondary-200 font-psemibold'>Aora</Text>
            </Text>
            <Text className='text-sm text-gray-200 text-center mt-2'>
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
            <CustomButton
              title='Get Started'
              handlePress={() => {
                console.log('Pressed');
              }}
              ContainerStyles='max-w-full mt-7'
            />
          </View>
          <StatusBar style='light' backgroundColor='#161622' />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
