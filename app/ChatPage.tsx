import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import TextMe from '../components/chat/TextMe'
import TextOthers from '../components/chat/TextOthers'

export default function ChatPage() {
  return (
    <View className='w-full h-full'>
        
    {/* Header */}
    <View className="flex flex-row justify-between items-center py-4 pl-4 pr-4">

      <View className=" flex flex-row items-center space-x-3">
          <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={20} color="black" />
          </TouchableOpacity>
          <Text className="font-bold text-xl">John Doe</Text>
      </View>
      <Ionicons name="ellipsis-vertical" size={18} color="black" />
    </View>

    <ScrollView className='mt-3 pl-2 pr-2'>

      <TextOthers 
        tag="JD" 
        name="John Doe" 
        date="Thursday 11:26am" 
        message="I'll start the count with food items." 
      />

      <TextOthers 
        tag="JD" 
        name="John Doe" 
        date="Thursday 11:26am" 
        message="Hey Melissa! I finished the physical stock count. Please Check." 
      />

      <TextMe 
        date="Thursday 11:27am" 
        message="Awesome John! Thank you." 
      />

      <TextOthers 
        tag="JD" 
        name="John Doe" 
        date="Thursday 11:30am" 
        message="Hey Melissa! Can you check the sales report for this week?" 
      />

      <TextMe 
        date="Thursday 11:35am" 
        message="Sure thing, I'll do it today!" 
      />

      <TextOthers 
        tag="JD" 
        name="John Doe" 
        date="Thursday 11:26am" 
        message="Hey Melissa! I finished the physical stock count. Please Check." 
      />

      <TextMe 
        date="Thursday 11:27am" 
        message="Awesome John! Thank you." 
      />

    </ScrollView>

    <View className='w-full h-16 border-t-[1px] border-t-outlineLight flex flex-row items-center justify-around pl-1'>

      <TouchableOpacity className='p-[10px] border-[1px] border-primary rounded-md'>
        <Ionicons name='calendar-clear-outline' size={20} color={"#27AE60"} />
      </TouchableOpacity>

      <TextInput
          className='w-[65%] p-2 border-[1px] border-gray-300 rounded-md'
          placeholder="Message"
          keyboardType="default"
      />

      <TouchableOpacity className='p-[11px] bg-primary rounded-md'>
        <Ionicons name='paper-plane-outline' size={20} color={"white"} />
      </TouchableOpacity>

      <View className=''></View>
    </View>

    </View>
  )
}