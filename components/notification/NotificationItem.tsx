import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NotificationItemProps {
    title: string;
    description: string;
    time: string;
    onReorderPress: () => void;
    onDismissPress: () => void;
    icon: string;
    active: boolean;
};

export default function NotificationItem({
  title = 'Inventory Alerts',
  description = 'Tomatoes below par level - 10kg remaining',
  time = '2m',
  onReorderPress = () => {},
  onDismissPress = () => {},
  icon = 'cart-outline',
  active = false
}: NotificationItemProps) {

  return (
    <TouchableOpacity className="flex-row items-start p-4 border-b-[1px] border-outlineLight" style={{backgroundColor: active ? "#faf7f7" : "white"}} >
      {/* Left Section: Icon and Status */}
      <View className="mr-4">
        <View className="bg-yellow-400 p-[6px] rounded-full">
          <Ionicons name={'cart-outline'} size={18} color="white" />
        </View>
        {
            active && <View className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full" />
        }
      </View>

      {/* Middle Section: Text Content */}
      <View className="flex-1">
        <Text className="text-sm font-bold">{title}</Text>
        <Text className="text-sm text-gray-600">{description}</Text>

        {/* Bottom Section: Buttons */}
        <View className="flex-row justify-start space-x-2 mt-3">
          <TouchableOpacity
            className="bg-primary px-4 py-2 rounded-lg"
            onPress={onReorderPress}
          >
            <Text className="text-white font-medium">Reorder</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border bg-white border-gray-300 px-4 py-2 rounded-lg"
            onPress={onDismissPress}
          >
            <Text className="text-gray-700 font-medium">Dismiss</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Right Section: Time */}
      <View className="ml-2 flex items-center">
        <Text className="text-sm font-medium text-gray-500">{time}</Text>
        <TouchableOpacity>
          <Text className="text-gray-500 text-lg">⋮</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
