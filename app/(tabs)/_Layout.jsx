import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='gap-2 items-center justify-center'>
      <Image
        source={icon}
        resizeMode='contain'
        style={{ tintColor: color }}
        className='w-6 h-6'
      />
      <Text style={{ color: color }}
        className={`text-xs  ${
          focused ? 'text-white font-psemibold' : 'text-gray-500 font-pregular'
        }`}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffa001',
          tabBarInactiveTintColor: '#cdcde0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name='Home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name='Home'
                icon={icons.home}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='Bookmark'
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name='Bookmark'
                icon={icons.bookmark}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='Create'
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name='Create'
                icon={icons.plus}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='Profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                focused={focused}
                name='Profile'
                icon={icons.profile}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
