import { Button } from '../ui';
import * as Styled from './GameFlowBottomBar.styles';

interface GameFlowBottomBarProps {
  buttonTitle: string;
  isDisabled?: boolean;
  onButtonPress: () => void;
  testID?: string;
}

export default function GameFlowBottomBar({
  buttonTitle,
  isDisabled,
  onButtonPress,
  testID,
}: Readonly<GameFlowBottomBarProps>) {
  return (
    <Styled.Container testID={testID}>
      <Button disabled={isDisabled} onPress={onButtonPress} testID={`button`}>
        {buttonTitle}
      </Button>
    </Styled.Container>
  );
}
