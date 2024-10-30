import { Stack } from "expo-router";

export default function TabStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      {/* <Stack.Screen
        name="IndentDetail"
        options={{ title: "Generate Report", headerShown: false }}
      /> */}
      </Stack>
  );
}
