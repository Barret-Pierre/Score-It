import { useTheme } from '@/context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './HomeScreen.styles';
import { FlatList } from 'react-native';
import { GameCard } from '@/components';
import { ScreenHeader } from '@/components/ui';
import { GAMES } from './constantes';
import { RootStackParamList } from '@/types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp>();

  const gap = theme.semantic.screen.gap;

  const handlePress = (game: (typeof GAMES)[number]) => {
    navigation.navigate('Setup', { game });
  };

  return (
    <Styled.Container testID="home-screen">
      <ScreenHeader
        title="Voici ta ludothèque"
        subtitle="A quoi on joue ?"
        testIDPrefix="home-screen"
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap }}
        contentContainerStyle={{ gap }}
        numColumns={2}
        renderItem={({ item }) => <GameCard game={item} onPress={() => handlePress(item)} />}
      />
    </Styled.Container>
  );
}
