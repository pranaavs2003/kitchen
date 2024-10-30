import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {router} from "expo-router"

interface ChatItemProps {
    tag: string;
    name: string;
    message: string;
    time: string;
};

const ChatItem = ({tag, name, message, time} : ChatItemProps) => {
  return (
    <TouchableOpacity 
      onPress={() => router.push('/ChatPage')}
      className='flex flex-row border-b-[1px] border-b-outlineLight pb-2 pt-2'>

      <View className='w-[15%]'>
        <View className='flex justify-center items-center rounded-full bg-slate-300 w-10 h-10'>
            <Text className="text-xl pr-[1px] pb-[2px] text-gray-600">{tag}</Text>
        </View>
      </View>

      <View className='w-[75%]'>
        <Text className='text-sm font-medium mb-2'>{name}</Text>
        <Text className='text-base'>{message}</Text>
      </View>

      <View className='w-[10%] flex-row justify-center'>
        <Text className="text-xs text-gray-500">{time}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default ChatItem;