import { styled } from 'styled-components/native';
import { TabButtonProps } from './types';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
