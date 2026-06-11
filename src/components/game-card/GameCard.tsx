import * as Styled from './GameCard.styles';
import { GameCardProps } from './types';

export default function GameCard({ game }: Readonly<GameCardProps>) {
  return (
    <Styled.Card>
      <Styled.CardImageWrapper>
        <Styled.CardImage source={game.image} resizeMode="cover"></Styled.CardImage>
      </Styled.CardImageWrapper>
      <Styled.CardTitle>{game.title}</Styled.CardTitle>
    </Styled.Card>
  );
}
