import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { useClientOnlyValue } from '../../components/useClientOnlyValue';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
				tabBarActiveTintColor: "#27AE60",
				tabBarInactiveTintColor: "#7D7D7D",
				tabBarLabelStyle: {
					fontSize: 10,
					fontWeight: "400",
				},
				tabBarStyle: {
					// marginHorizontal: 4,
					paddingBottom: 10,
					paddingTop: 10,
					height: 65,
				},
			}}
			initialRouteName="(index)"
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="telegram" color='red' />,
        }}
      />
			<Tabs.Screen
				name="inventory/index"
				options={{
					title: "Inventory",
					tabBarIcon: ({ color }) => (
						<Ionicons name="basket-outline" color={color} size={21} />
					),
				}}
			/>
			<Tabs.Screen
				name="(indent)"
				options={{
					title: "Indent",
					tabBarIcon: ({ color }) => (
						<Ionicons name="paper-plane-outline" color={color} size={20} />
					),
				}}
			/>
			<Tabs.Screen
				name="(recipe)"
				options={{
					title: "Recipe",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="food-drumstick-outline" size={20} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="(more)"
				options={{
					title: "More",
					tabBarIcon: ({ color }) => (
						<Ionicons name="file-tray-outline" color={color} size={20} />
					),
				}}
			/>
    </Tabs>
  );
}
