import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  overflow-y: scroll;
  -webkit-scrollbar: {
    display: none
  }

  align-items: center;
  justify-content: center;

  z-index: -1;
  top: -70px;
  left: 0;

  height: 0;
  min-height: 0;

  width: 100vw;

  padding: auto;
  padding-bottom: 70px;
  margin: 0;

  background-color: var(--color-header);

  transition: height 0.6s ease-in-out, top 0.6s ease-in-out ;

  .searchResults--item {
    display: inline-block;
    width: 150px;
    cursor: pointer;

    > img, span {
      width: 150px;
      height: 225px;

      transform: scale(0.9);
      transition: all ease 0.2s;

      -webkit-box-shadow: 0px 8px 16px -6px rgba(0,0,0,1);
-moz-box-shadow: 0px 8px 16px -6px rgba(0,0,0,1);
box-shadow: 0px 8px 16px -6px rgba(0,0,0,1);
    }

    > span {
      display: flex;

      text-align: center;
      align-items: center;
      justify-content: center;

      background: black;
    }

    &:hover {
      >img, span {
        transform: scale(1)
      }


      .movieRow--icon-container {
        transform: scale(1);
        z-index: 3;
      }
    }

  }
`;
