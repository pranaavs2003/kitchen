import { Stack } from "expo-router";

export default function TabStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Recipe", headerShown: false }}
      />
      {/* <Stack.Screen
        name="RecipePage"
        options={{ title: "Menu", headerShown: false }}
      />
      <Stack.Screen
        name="MenuPage"
        options={{ title: "Menu", headerShown: false }}
      /> */}
    </Stack>
  );
}
