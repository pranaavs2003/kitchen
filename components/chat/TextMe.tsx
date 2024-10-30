import { View, Text } from 'react-native'
import React from 'react'

interface TextMeProps {
    date: string;
    message: string;
};

const TextMe = ({ date="Thursday 11:27am", message="I'll start the count with food items." } : TextMeProps) => {
  return (
    <View className='flex flex-row gap-x-3 justify-end mb-4'>

      <View className='w-[70%] flex gap-y-1'>
        <View className='flex flex-row justify-between items-baseline'>
            <Text className='font-semibold'>You</Text>
            <Text className='text-xs text-gray-500 pr-1'>{date}</Text>
        </View>
        <View className='bg-[#27AE60] p-3 rounded-b-md rounded-l-md'>
            <Text className='text-white'>{message}</Text>
        </View>
      </View>

    </View>
  )
}

export default TextMe;