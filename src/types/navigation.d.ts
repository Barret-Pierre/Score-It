import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Tabs: undefined;
  Game: { screen: keyof GameStackParamList };
};

export type GameStackParamList = {
  Setup: undefined;
};

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
