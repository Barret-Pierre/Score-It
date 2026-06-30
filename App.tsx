import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { RootNavigator } from '@/navigations';
import { GameProvider } from '@/contexts/GameContext';

export default function App() {
  const [loaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/inter/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/inter/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/inter/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/inter/Inter-Bold.ttf'),
    'Kumbh-Sans-Regular': require('./assets/fonts/kumbh-sans/KumbhSans-Regular.ttf'),
    'Kumbh-Sans-Medium': require('./assets/fonts/kumbh-sans/KumbhSans-Medium.ttf'),
    'Kumbh-Sans-SemiBold': require('./assets/fonts/kumbh-sans/KumbhSans-SemiBold.ttf'),
    'Kumbh-Sans-Bold': require('./assets/fonts/kumbh-sans/KumbhSans-Bold.ttf'),
  });

  if (!loaded) return null;

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
