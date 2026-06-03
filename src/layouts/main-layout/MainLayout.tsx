import { ReactNode } from 'react';
import { Header } from '@/components/header/';
import * as Styled from './MainLayout.styles';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Styled.SafeArea>
      <Header />
      <Styled.Content>{children}</Styled.Content>
    </Styled.SafeArea>
  );
}
