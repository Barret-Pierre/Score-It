import { Button } from '../ui';
import * as Styled from './GameFlowBottomBar.styles';

interface GameFlowBottomBarProps {
  buttonTitle: string;
  isDisabled?: boolean;
  onButtonPress: () => void;
}

export default function GameFlowBottomBar({
  buttonTitle,
  isDisabled,
  onButtonPress,
}: Readonly<GameFlowBottomBarProps>) {
  return (
    <Styled.Container testID="game-bottom-bar">
      <Button disabled={isDisabled} onPress={onButtonPress}>
        {buttonTitle}
      </Button>
    </Styled.Container>
  );
}
