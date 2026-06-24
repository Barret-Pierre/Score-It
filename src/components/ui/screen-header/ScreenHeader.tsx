import { View } from 'react-native';
import * as Styled from './ScreenHeader.styles';
import { ReactNode } from 'react';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  customSubtitle?: ReactNode;
  testID: string;
}

export default function ScreenHeader({
  title,
  subtitle,
  customSubtitle,
  testID,
}: Readonly<ScreenHeaderProps>) {
  return (
    <View>
      <Styled.Title testID={`${testID}-title`}>{title}</Styled.Title>
      {customSubtitle && <View>{customSubtitle}</View>}
      {subtitle && <Styled.Subtitle testID={`${testID}-subtitle`}>{subtitle}</Styled.Subtitle>}
    </View>
  );
}
