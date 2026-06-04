import * as Styled from './MainLayout.styles';
import { Header } from '@/components';
import { MainLayoutProps } from '@/types/layout.types';

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Styled.SafeArea>
      <Header />
      <Styled.Content>{children}</Styled.Content>
    </Styled.SafeArea>
  );
}
