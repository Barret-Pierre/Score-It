import * as Styled from './GameCard.styles';
import { GameCardProps } from './types';

export default function GameCard({ game, onPress, testID }: Readonly<GameCardProps>) {
  return (
    <Styled.Card onPress={onPress} testID={testID}>
      <Styled.CardImageWrapper>
        <Styled.CardImage
          source={game.image}
          resizeMode="cover"
          testID={`game-card-image-${game.id}`}
        ></Styled.CardImage>
      </Styled.CardImageWrapper>
      <Styled.CardTitle testID={`game-card-title-${game.id}`}>{game.title}</Styled.CardTitle>
    </Styled.Card>
  );
}
