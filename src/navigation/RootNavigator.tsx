import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '@/navigation/TabNavigator';
import { RootStackParamList } from '@/types/navigation.types';
import MainLayout from '@/layouts/main-layout/MainLayout';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <MainLayout>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
      </Stack.Navigator>
    </MainLayout>
  );
}
