import { View, Text } from 'react-native'
import React from 'react'

interface TextOthersProps {
    tag: string;
    name: string;
    date: string;
    message: string;
};

const TextOthers = ({ tag="JD", name="John Doe", date="Thursday 11:26am", message="I'll start the count with food items." } : TextOthersProps) => {
  return (
    <View className='flex flex-row gap-x-3 mb-4'>

      <View className='bg-[#ECF0F1] rounded-full w-9 h-9 flex flex-row justify-center items-center'>
        <Text className='font-medium text-gray-600'>{tag}</Text>
      </View>

      <View className='w-[70%] flex gap-y-1'>
        <View className='flex flex-row justify-between items-baseline'>
            <Text className='font-semibold'>{name}</Text>
            <Text className='text-xs text-gray-500 pr-1'>{date}</Text>
        </View>
        <View className='bg-[#ECF0F1] p-3 rounded-b-md rounded-r-md'>
            <Text className=''>{message}</Text>
        </View>
      </View>

    </View>
  )
}

export default TextOthers;