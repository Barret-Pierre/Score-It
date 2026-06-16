import { useTheme } from '@/context/ThemeContext';
import * as Styled from './HomeScreen.styles';
import { FlatList } from 'react-native';
import { GameCard } from '@/components';
import { ScreenHeader } from '@/components/ui';
import { GAMES } from './constantes';

export default function HomeScreen() {
  const { theme } = useTheme();

  const gap = theme.semantic.screen.gap;

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
        renderItem={({ item }) => <GameCard game={item} />}
      />
    </Styled.Container>
  );
}
