import Text from '@/components/Text';
import { db } from '@/db/db';
import NiceModal from '@ebay/nice-modal-react';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';
import migrations from "../../drizzle/migrations";
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  const [loaded, fontError] = useFonts({
    "snpro-medium": require('../../fonts/SNPro-Medium.ttf'),
    "snpro-bold": require('../../fonts/SNPro-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [loaded, fontError]);

  if (!loaded && !fontError) {
    return null;
  }

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return (
    <NiceModal.Provider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"/>

        {/* MODULES */}
        <Stack.Screen name='task'/>

      </Stack>
    </NiceModal.Provider>
  );
}
