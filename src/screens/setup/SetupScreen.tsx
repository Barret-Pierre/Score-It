import { Text, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';

type SetupRouteProp = RouteProp<RootStackParamList, 'Setup'>;

export default function SetupScreen() {
  const route = useRoute<SetupRouteProp>();
  const { game } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setup Screen for {game.title}</Text>
    </View>
  );
}
