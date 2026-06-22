import { Button } from '../ui';
import * as Styled from './GameBottomBar.styles';

interface GameBottomBarProps {
  buttonTitle: string;
  isDisabled?: boolean;
  onButtonPress: () => void;
}

export default function GameBottomBar({
  buttonTitle,
  isDisabled,
  onButtonPress,
}: Readonly<GameBottomBarProps>) {
  return (
    <Styled.Container testID="game-bottom-bar">
      <Button disabled={isDisabled} onPress={onButtonPress}>
        {buttonTitle}
      </Button>
    </Styled.Container>
  );
}
