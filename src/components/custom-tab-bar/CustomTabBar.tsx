import * as Styled from './CustomTabBar.styles';
import { TabItem } from './TabItem';
import { CustomTabBarProps, Route } from './types';

export default function CustomTabBar({ state, navigation }: Readonly<CustomTabBarProps>) {
  const handleTabPress = (route: Route, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate(route.name);
    }
  };

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
