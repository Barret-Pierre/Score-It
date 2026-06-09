import * as Styled from './CustomTabBar.styles';
import { TabItem } from './TabItem';
import { useCallback } from 'react';
import { CustomTabBarProps, Route } from './types';

export default function CustomTabBar({ state, navigation }: CustomTabBarProps) {
  const handleTabPress = useCallback(
    (route: Route, isFocused: boolean) => {
      if (!isFocused) {
        navigation.navigate(route.name);
      }
    },
    [navigation],
  );

  return (
    <Styled.Container>
      {state.routes.map((route, index) => (
        <TabItem
          key={route.key}
          route={route}
          isFocused={state.index === index}
          isLastItem={index === state.routes.length - 1}
          onPress={() => handleTabPress(route, state.index === index)}
        />
      ))}
    </Styled.Container>
  );
}
