import { Text, View } from 'react-native';
import { useGame } from '@/context/GameContext';

export default function SetupScreen() {
  const { state } = useGame();

  return (
    <View testID="setup-screen" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setup Screen for {state.selectedGame?.title}</Text>
    </View>
  );
}
