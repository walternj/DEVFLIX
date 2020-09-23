import styled from 'styled-components';

export const Container = styled.div`

`;

export const List = styled.div`
  margin-top: -150px;
  background: linear-gradient(to top, var(--color-background) 95%, transparent 0 );

`;

export const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  background: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%
  }
`;
