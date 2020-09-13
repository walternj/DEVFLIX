import styled from 'styled-components';


export const Container = styled.header<{background: boolean}>`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;

  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  transition: all ease 0.5s;

  background: ${props => (props.background ? 'var(--color-header)' : 'transparent')};

  .header--logo {
    height: 35px;
  }

  .header--user {
    height: 35px;


    > a img {
      height: 100%;
      border-radius: 4px;
    }
  }

`;
