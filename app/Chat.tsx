import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import ChatItem from '../components/chat/ChatItem';
import AnnouncementItem from '../components/chat/AnnouncementItem';

const announcement = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus id veniam, porro molestias, ipsam qui quia exercitationem, dolor aperiam eos eum vel pariatur? Distinctio dolorum facere mollitia, atque veritatis aperiam.";

const style = {
  text: {
    active: "font-semibold",
    inactive: "font-semibold text-gray-500"
  },
  button: {
    active: "bg-white border-[1px] border-outlineLight rounded-sm p-2 w-[50%] flex flex-row justify-center rounded-md",
    inactive: "p-2 w-[50%] flex flex-row justify-center"
  }
};

const Chat = () => {
    const router = useRouter();
    const [tab, setTab] = useState(0);

    return (
      <View className='w-full h-full pl-4 pr-4'>
        
        {/* Header */}
        <View className="flex flex-row justify-between items-center py-4">
  
          <View className=" flex flex-row items-center space-x-3">
              <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={20} color="black" />
              </TouchableOpacity>
              <Text className="font-bold text-lg">Messages</Text>
          </View>
          <Ionicons name="ellipsis-vertical" size={18} color="black" />
        </View>

        {/* Selector */}
        <View className='flex flex-row bg-[#d9dadb] justify-around mb-5 mt-3 rounded-md'>
          <TouchableOpacity onPress={() => setTab(0)} className={tab===0 ? style.button.active : style.button.inactive} >
            <Text className={tab===0 ? style.text.active : style.text.inactive}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab(1)} className={tab===1 ? style.button.active : style.button.inactive}>
            <Text className={tab===1 ? style.text.active : style.text.inactive}>Announcements</Text>
          </TouchableOpacity>
        </View>

        {
          tab === 0
          ?
          <ScrollView showsVerticalScrollIndicator={false}>
          {
            [0,1,2,3,4,5,6,7,8,9,10,11,12].map((item) => <ChatItem key={item} tag='JD' name='John Doe' message="I'll start the count with food Items." time='11:26' />)
          }
          </ScrollView>
          :
          <ScrollView showsVerticalScrollIndicator={false}>
          {
            [0, 1, 2, 3].map((item) => <AnnouncementItem key={item} name='Admin' date='Thursday 11:26am' announcement={announcement} />)
          }
          </ScrollView>
        }

  
      </View>
    )
}

export default Chat;