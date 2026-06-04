import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import { TabParamList } from '@/types/navigation.types';
import MainLayout from '@/layouts/main-layout/MainLayout';
import CustomTabBar from '@/components/custom-tab-bar/CustomTabBar';

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
