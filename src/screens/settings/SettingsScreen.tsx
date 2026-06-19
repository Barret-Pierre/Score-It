import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './SettingsScreen.styles';
import { ScreenHeader } from '@/components/ui';

export default function SettingsScreen() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Styled.Container testID="settings-screen">
      <ScreenHeader
        title="Settings"
        subtitle={`Thème actuel : ${themeMode === 'light' ? '☀️ Light' : '🌙 Dark'}`}
        testIDPrefix="settings-screen"
      />
      <Styled.ThemeButton onPress={toggleTheme}>
        <Styled.ButtonText>
          Basculer vers {themeMode === 'light' ? 'Dark' : 'Light'}
        </Styled.ButtonText>
      </Styled.ThemeButton>
    </Styled.Container>
  );
}
