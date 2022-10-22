import React, { FC, useCallback, useContext } from 'react';
import { PressableProps } from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { IconProps } from '../../../../components/icons/Icon.props';
import { Text } from '../../../../components';
import { CoinsIcon } from '../../../../components/icons/Coins';
import { CoinsContext } from '../../../../contexts';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setHint } from '../../../../actions';
import { HintType } from '../../../../types';

const StyledHint = styled.View`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const StyledPressable = styled.Pressable`
  width: auto;
`;

const Coins = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.main20};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 2px 8px;
  align-items: flex-end;
  justify-self: flex-end;
  margin-left: 64px;
`;
const CoinsText = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  color: ${({ theme }) => theme.colors.main};
  font-size: 12px;
`;
const HintName = styled(Text)<{ disabled: boolean }>`
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.main50 : theme.colors.main};
  text-align: center;
`;

interface Props extends PressableProps {
  coins: number;
  icon: FC<IconProps>;
  name: string;
  id: HintType;
  isDisabledHint?: boolean;
}

export const Hint: FC<Props> = ({
  coins,
  name,
  id,
  icon: Icon,
  isDisabledHint,
  ...props
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { usedHints } = useAppSelector((state) => state.game);
  const { addCoins, coins: userCoins } = useContext(CoinsContext);

  const isDisabled =
    isDisabledHint || usedHints.includes(id) || coins > userCoins;

  const useHint = useCallback(() => {
    if (!isDisabled) {
      dispatch(setHint(id));
      addCoins(-coins);
    }
  }, [isDisabled, dispatch, addCoins, coins]);

  return (
    <StyledHint>
      <Coins>
        <CoinsText>{coins}</CoinsText>
        <CoinsIcon fill={theme.colors.main} width={16} height={16} />
      </Coins>
      <StyledPressable onPress={useHint} {...props}>
        <Icon
          fill={isDisabled ? theme.colors.accent50 : theme.colors.accent}
          height={64}
          width={64}
        />

        <HintName disabled={isDisabled}>{name}</HintName>
      </StyledPressable>
    </StyledHint>
  );
};
