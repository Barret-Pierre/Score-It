import * as Styled from './SetupSubtitle.styles';
import { SubtitleTextVariant } from './types.d';

interface SetupSubtitleProps {
  isEngineReady: boolean;
  isMinPlayerReadyReached: boolean;
  isSessionReady: boolean;
  playersReadyCount: number;
  playerCount: number;
  minPlayers: number;
}

export default function SetupSubtitle({
  isEngineReady,
  isMinPlayerReadyReached,
  isSessionReady,
  playersReadyCount,
  playerCount,
  minPlayers,
}: Readonly<SetupSubtitleProps>) {
  if (!isEngineReady)
    return (
      <Styled.CustomSubtitle $variant={SubtitleTextVariant.DANGER}>
        Jeu indisponible
      </Styled.CustomSubtitle>
    );
  if (isSessionReady)
    return (
      <Styled.CustomSubtitle $variant={SubtitleTextVariant.INFO}>
        Session complète
      </Styled.CustomSubtitle>
    );
  if (isMinPlayerReadyReached)
    return (
      <Styled.CustomSubtitle $variant={SubtitleTextVariant.PRIMARY}>
        <Styled.Info>{playersReadyCount}</Styled.Info> joueurs sur{' '}
        <Styled.Info>{playerCount}</Styled.Info> prêts
      </Styled.CustomSubtitle>
    );
  return (
    <Styled.CustomSubtitle $variant={SubtitleTextVariant.ACCENT}>
      {minPlayers} joueurs minimum
    </Styled.CustomSubtitle>
  );
}
