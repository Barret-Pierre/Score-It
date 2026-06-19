import * as Styled from './GameLayout.styles';
import { GameHeader, GameBottomBar } from '@/components';
import { GameLayoutProps } from '@/types/layout';

export default function GameLayout({ children }: Readonly<GameLayoutProps>) {
  return (
    <Styled.SafeArea testID="game-layout">
      <GameHeader />
      <Styled.Content>{children}</Styled.Content>
      <GameBottomBar />
    </Styled.SafeArea>
  );
}
