import styled, {css} from 'styled-components'
import { MdPlaylistAdd } from 'react-icons/md'

import removeIcon from '../../icons/playlist-remove.svg'

export const Container = styled.button`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey-button);
  fill: var(--color-red);

  max-width: 150px;
  padding: 0;

  font-size: 40px;
  font-weight: bold;

  border-radius: 5px;
  text-decoration: none;
  opacity: 1;
  transition: all ease 0.2s;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const iconCSS= css`
  padding: 0;
  margin: 0;
  width: 40px;
  height: 40px;
`;

export const AddFavoriteIcon= styled(MdPlaylistAdd)`
  fill: var(--color-green-text);
  ${iconCSS}
`;

export const RemoveFavoriteIcon = styled.svg.attrs({

})`
  ${iconCSS}
  background-image: url(${removeIcon}) ;
  background-repeat: no-repeat;
`;
