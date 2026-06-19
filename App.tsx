import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { RootNavigator } from '@/navigations';
import { GameProvider } from '@/contexts/GameContext';

export default function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <NavigationContainer>
          <RootNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </GameProvider>
    </ThemeProvider>
  );
}
