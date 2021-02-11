import styled from '@emotion/native';

export const ResultLayout = styled.View`
  display: flex;
  width: 100%;
  padding: 0 12px;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  & > * + * {
    margin: 18px auto 0;
  }
`;
