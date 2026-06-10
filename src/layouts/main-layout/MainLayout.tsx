import * as Styled from './MainLayout.styles';
import { Header } from '@/components';
import { MainLayoutProps } from '@/types/layout';

export default function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <Styled.SafeArea testID="main-layout">
      <Header />
      <Styled.Content>{children}</Styled.Content>
    </Styled.SafeArea>
  );
}
