import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameStackParamList } from '@/types/navigation';
import { SetupScreen } from '@/screens';
import GameLayout from '@/layouts/game-layout/GameLayout';

const Stack = createNativeStackNavigator<GameStackParamList>();

export default function GameNavigator() {
  return (
    <GameLayout>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Setup" component={SetupScreen} />
      </Stack.Navigator>
    </GameLayout>
  );
}
