import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './SetupScreen.styles';
import { ScreenHeader } from '@/components/ui';
import { Text } from 'react-native';

export default function SetupScreen() {
  const theme = useTheme();

  return (
    <Styled.Container testID="setup-screen">
      <ScreenHeader
        title="Ajouter des joueurs"
        customSubtitle={<Styled.CustomSubtitle>2 joueurs minimum</Styled.CustomSubtitle>}
        testID="screen-header"
      />
    </Styled.Container>
  );
}
