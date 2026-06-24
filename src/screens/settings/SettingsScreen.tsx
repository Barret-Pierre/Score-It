import { useTheme } from '@/contexts/ThemeContext';
import * as Styled from './SettingsScreen.styles';
import { Button, ScreenHeader } from '@/components/ui';

export default function SettingsScreen() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Styled.Container testID="settings-screen">
      <ScreenHeader
        title="Settings"
        subtitle={`Thème actuel : ${themeMode === 'light' ? '☀️ Light' : '🌙 Dark'}`}
        testID="settings-screen"
      />
      <Button onPress={toggleTheme} testID={`button`}>
        Basculer vers {themeMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Styled.Container>
  );
}
