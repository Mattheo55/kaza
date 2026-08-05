import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "snpro-medium": require('../../fonts/SNPro-Medium.ttf'),
    "snpro-bold": require('../../fonts/SNPro-Bold.ttf'),
  })

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
