import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@/context/ThemeContext';
import { RootNavigator } from '@/navigation';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
