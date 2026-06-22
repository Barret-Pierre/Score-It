import * as Styled from './GameLayout.styles';
import { GameFlowHeader, GameFlowBottomBar } from '@/components';
import { useGame } from '@/contexts/GameContext';
import { GameLayoutProps } from '@/types/layout';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function GameLayout({ children }: Readonly<GameLayoutProps>) {
  const { state } = useGame();
  const navigation = useNavigation();
  const handleIconLeftPress = () => {
    navigation.goBack();
  };
  const handleButtonPress = () => {
    console.info('Button pressed!');
  };

  return (
    <Styled.SafeArea testID="game-layout">
      <GameFlowHeader
        iconLeft={ArrowLeft}
        title={state.selectedGame?.title || 'Game'}
        onIconLeftPress={handleIconLeftPress}
      />
      <Styled.Content>{children}</Styled.Content>
      <GameFlowBottomBar
        buttonTitle="Lancer une partie"
        isDisabled={false}
        onButtonPress={handleButtonPress}
      />
    </Styled.SafeArea>
  );
}
