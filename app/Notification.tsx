import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import NotificationItem from '../components/notification/NotificationItem';

const notificationData = [
  {
    title: 'Inventory Alerts',
    description: 'Tomatoes below par level - 10kg remaining',
    time: '2m',
    onReorderPress: () => console.log('Reorder Tomatoes'),
    onDismissPress: () => console.log('Dismiss Tomatoes Alert'),
    icon: 'cart-outline',
    active: true,
  },
  {
    title: 'Stock Reminder',
    description: 'Onions running low - 5kg remaining',
    time: '10m',
    onReorderPress: () => console.log('Reorder Onions'),
    onDismissPress: () => console.log('Dismiss Onions Alert'),
    icon: 'alert-circle-outline',
    active: false,
  },
  {
    title: 'Restock Notification',
    description: 'Carrots need restocking - 3kg remaining',
    time: '15m',
    onReorderPress: () => console.log('Reorder Carrots'),
    onDismissPress: () => console.log('Dismiss Carrots Alert'),
    icon: 'leaf-outline',
    active: false,
  },
  {
    title: 'Low Stock Alert',
    description: 'Potatoes below threshold - 20kg remaining',
    time: '1h',
    onReorderPress: () => console.log('Reorder Potatoes'),
    onDismissPress: () => console.log('Dismiss Potatoes Alert'),
    icon: 'ios-warning-outline',
    active: false,
  },
  {
    title: 'Stock Reminder 2',
    description: 'Onions running low - 5kg remaining',
    time: '10m',
    onReorderPress: () => console.log('Reorder Onions'),
    onDismissPress: () => console.log('Dismiss Onions Alert'),
    icon: 'alert-circle-outline',
    active: false,
  },
  {
    title: 'Restock Notification 2',
    description: 'Carrots need restocking - 3kg remaining',
    time: '15m',
    onReorderPress: () => console.log('Reorder Carrots'),
    onDismissPress: () => console.log('Dismiss Carrots Alert'),
    icon: 'leaf-outline',
    active: false,
  },
  
  
];


const Notification = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <View className='w-full h-full'>
      
      {/* Header */}
      <View className="flex flex-row justify-between items-center py-4 pl-4 pr-4">
        <View className=" flex flex-row items-center space-x-3">
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={20} color="black" />
            </TouchableOpacity>
            <Text className="font-bold text-lg">Notifications</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={18} color="black" />
      </View>

      {/* Search Bar */}
      <View className="flex flex-row items-center mt-4 mb-4 pl-4 pr-4">
        <View className="flex-1 flex flex-row items-center bg-gray-100 rounded-md px-4 py-2">
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            className="ml-2 text-gray-700 flex-1"
          />
        </View>
        <TouchableOpacity className="ml-2 p-2 rounded-md border-[1px] border-outlineLight">
          <Ionicons name="filter" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          notificationData.map((item) => 
            <NotificationItem 
                key = {item.title}
                title = {item.title}
                description = {item.description}
                time = {item.time}
                onReorderPress = {() => console.log('Works')}
                onDismissPress = {() => console.log('Works')}
                icon = {item.icon}
                active = {item.active}
            />
          )
        }
      </ScrollView>


    </View>
  )
}

export default Notification;