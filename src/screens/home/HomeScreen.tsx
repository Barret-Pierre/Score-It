import { useTheme } from '@/context/ThemeContext';
import * as Styled from './HomeScreen.styles';
import { FlatList, View } from 'react-native';

export type Game = {
  id: string;
  title: string;
  image: ReturnType<typeof require>;
};

const data = [
  { id: '1', title: 'Flip 7', image: require('../../../assets/flip-7.png') },
  { id: '2', title: 'Odin', image: require('../../../assets/odin.png') },
  { id: '3', title: 'Skyjo', image: require('../../../assets/skyjo.png') },
  { id: '4', title: '6 qui prend', image: require('../../../assets/6-qui-prend.png') },
];

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
        data={data}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap }}
        contentContainerStyle={{ gap }}
        numColumns={2}
        renderItem={({ item }) => (
          <Styled.Card>
            <Styled.CardImageWrapper>
              <Styled.CardImage source={item.image} resizeMode="cover"></Styled.CardImage>
            </Styled.CardImageWrapper>
            <Styled.CardTitle>{item.title}</Styled.CardTitle>
          </Styled.Card>
        )}
      />
    </Styled.Container>
  );
}
