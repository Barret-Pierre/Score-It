import { useCallback } from 'react';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { HomeScreen, SettingsScreen } from '@/screens';
import { MainLayout } from '@/layouts';
import { TabParamList } from '@/types/navigation';
import { CustomTabBar } from '@/components';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const renderTabBar = useCallback((props: BottomTabBarProps) => <CustomTabBar {...props} />, []);
  return (
    <MainLayout>
      <Tab.Navigator
        tabBar={renderTabBar}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </MainLayout>
  );
}
