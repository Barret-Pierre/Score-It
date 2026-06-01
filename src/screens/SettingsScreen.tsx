import { useTheme } from '@/context/ThemeContext';
import * as Styled from './SettingsScreen.styles';

export default function SettingsScreen() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Styled.Container>
      <Styled.Title>Settings</Styled.Title>

      <Styled.ThemeInfo>
        Thème actuel : {themeMode === 'light' ? '☀️ Light' : '🌙 Dark'}
      </Styled.ThemeInfo>

      <Styled.ThemeButton onPress={toggleTheme}>
        <Styled.ButtonText>
          Basculer vers {themeMode === 'light' ? 'Dark' : 'Light'}
        </Styled.ButtonText>
      </Styled.ThemeButton>
    </Styled.Container>
  );
}
