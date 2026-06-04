import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SettingsScreen } from '@/screens';
import { MainLayout } from '@/layouts';
import { TabParamList } from '@/types/navigation.types';
import { CustomTabBar } from '@/components';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <MainLayout>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
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
