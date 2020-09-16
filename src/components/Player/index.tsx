import React from 'react';
import ReactPlayer from 'react-player'

import { Container } from './styles';

interface PlayerProps{
  url: string
}

const Player: React.FC<PlayerProps> = ({url}) => {
  return (
    <Container>
      <ReactPlayer
        className='react-player'
        url={url}
        controls
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Player;
