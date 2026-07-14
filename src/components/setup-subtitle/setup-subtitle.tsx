import * as Styled from './setup-subtitle.styles';

interface SetupSubtitleProps {
  isEngineReady: boolean;
  isSessionFull: boolean;
  isSessionReady: boolean;
  numberOfPlayersReady: number;
  maxPlayers: number;
  minPlayers: number;
}

export default function SetupSubtitle({
  isEngineReady,
  isSessionFull,
  isSessionReady,
  numberOfPlayersReady,
  maxPlayers,
  minPlayers,
}: Readonly<SetupSubtitleProps>) {
  if (!isEngineReady) return <Styled.CustomSubtitle>Jeu indisponible</Styled.CustomSubtitle>;
  if (isSessionFull) return <Styled.CustomSubtitle>Session complète</Styled.CustomSubtitle>;
  if (isSessionReady)
    return (
      <Styled.CustomSubtitle>
        {numberOfPlayersReady} joueurs sur {maxPlayers} prêts
      </Styled.CustomSubtitle>
    );
  return <Styled.CustomSubtitle>{minPlayers} joueurs minimum</Styled.CustomSubtitle>;
}
