import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import * as Styled from './HomeScreen.styles';
import { FlatList } from 'react-native';
import { GameCard } from '@/components';
import { ScreenHeader } from '@/components/ui';
import { getGames } from '@/services/game.service';
import { useGame } from '@/contexts/GameContext';
import { NavigationProp } from '@/types/navigation';
import { Game } from '@/types/game';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { theme } = useTheme();
  const { dispatch } = useGame();

  const gap = theme.semantic.screen.gap;
  const games = getGames();

  const handlePress = (game: Game) => {
    dispatch({ type: 'SELECT_GAME', payload: game });
    navigation.navigate('Setup');
  };

  return (
    <Styled.Container testID="home-screen">
      <ScreenHeader
        title="Voici ta ludothèque"
        subtitle="A quoi on joue ?"
        testIDPrefix="home-screen"
      />
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap }}
        contentContainerStyle={{ gap }}
        numColumns={2}
        renderItem={({ item }) => (
          <GameCard game={item} onPress={() => handlePress(item)} testID={`game-card-${item.id}`} />
        )}
      />
    </Styled.Container>
  );
}
