import { View, Text } from 'react-native'
import React from 'react'

interface AnnouncementItemProps {
    name: string;
    date: string;
    announcement: string;
};

const AnnouncementItem = ({name, date, announcement} : AnnouncementItemProps) => {
  return (
    <View className='flex mb-5'>
        
      <View className='flex flex-row justify-between items-baseline mb-2'>
        <Text className='text-sm font-semibold'>{name}</Text>
        <Text className='text-gray-400 text-xs font-normal'>{date}</Text>
      </View>

      <View className='bg-[#ECF0F1] p-3 rounded-md'>
        <Text className='leading-5'>{announcement}</Text>
      </View>
    
    </View>
  )
}

export default AnnouncementItem;