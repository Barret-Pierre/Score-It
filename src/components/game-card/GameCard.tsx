import * as Styled from './GameCard.styles';
import { GameCardProps } from './types';

export default function GameCard({ game, onPress }: Readonly<GameCardProps>) {
  return (
    <Styled.Card onPress={onPress} testID="game-card">
      <Styled.CardImageWrapper>
        <Styled.CardImage
          source={game.image}
          resizeMode="cover"
          testID="game-card-image"
        ></Styled.CardImage>
      </Styled.CardImageWrapper>
      <Styled.CardTitle testID="game-card-title">{game.title}</Styled.CardTitle>
    </Styled.Card>
  );
}
