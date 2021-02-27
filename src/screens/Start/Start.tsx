import { useTranslation } from 'react-i18next';
import styled from '@emotion/native';
import { MenuItem, Logo } from '../../components';
import { ROUTES } from '../../Routes';
import { PlayIcon } from '../../components/icons';

const StartLayout = styled.View`
  display: flex;
  padding: 32px 16px;
  align-items: stretch;
  height: 100vh;
`;
const LogoLayout = styled.View`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-content: center;
`;

export const Start = () => {
  const { t } = useTranslation();

  return (
    <StartLayout>
      <LogoLayout>
        <Logo />
      </LogoLayout>
      <MenuItem
        primary
        to={ROUTES.Playlists}
        icon={PlayIcon}
        text={t('Play')}
      />
    </StartLayout>
  );
};
