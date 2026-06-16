import { useTheme } from '@/context/ThemeContext';
import * as Styled from './HomeScreen.styles';
import { FlatList, View } from 'react-native';
import { GAMES } from './constantes';
import GameCard from '@/components/game-card/GameCard';

export default function HomeScreen() {
  const { theme } = useTheme();

  const gap = theme.semantic.screen.gap;

  return (
    <Styled.Container testID="home-screen">
      <View>
        <Styled.Title testID="home-screen-title">Voici ta ludothèque</Styled.Title>
        <Styled.Subtitle testID="home-screen-subtitle">A quoi on joue ?</Styled.Subtitle>
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
