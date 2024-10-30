import { Stack } from "expo-router";

export default function TabStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Recipe", headerShown: false }}
      />
      {/* <Stack.Screen
        name="Integrations"
        options={{ title: "Integrations", headerShown: false }}
      />
      <Stack.Screen
        name="Sales"
        options={{ title: "Sales", headerShown: false }}
      /> */}
    </Stack>
  );
}
