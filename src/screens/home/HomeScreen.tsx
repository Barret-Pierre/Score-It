import { useTheme } from '@/context/ThemeContext';
import * as Styled from './HomeScreen.styles';
import { FlatList, View } from 'react-native';
import { GAMES } from './connstantes';
import GameCard from '@/components/game-card/GameCard';

export default function HomeScreen() {
  const { theme } = useTheme();

  const gap = theme.primitives.spacing.md;

  return (
    <Styled.Container>
      <View>
        <Styled.Title>Voici ta ludothèque</Styled.Title>
        <Styled.Subtitle>A quoi on joue ?</Styled.Subtitle>
      </View>
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap }}
        contentContainerStyle={{ gap }}
        numColumns={2}
        renderItem={({ item }) => <GameCard game={item} />}
      />
    </Styled.Container>
  );
}
