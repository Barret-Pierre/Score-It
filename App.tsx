import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@/context/ThemeContext';
import { RootNavigator } from '@/navigation';
import { GameProvider } from '@/context/GameContext';

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
