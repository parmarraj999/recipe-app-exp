import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2B2D41',
        tabBarStyle:{
          height:55,
          borderTopWidth:0,
          elevation:0,
          backgroundColor:"#F7F7F7"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
