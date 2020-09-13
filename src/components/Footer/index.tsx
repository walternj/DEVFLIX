import React from 'react';

import { Container, LinkedinIcon, GithubIcon, SiteIcon } from './styles';

const Footer: React.FC = () => {

  return (
    <Container>
      <div className="footer--left-container">
        <p>Droit d'image à Netflix</p>
        <p>Powered by TMDB</p>
      </div>
      <div className="footer--right-container">
        <span>by WalterNJ</span>
        <a href="https://www.linkedin.com/in/walter-nunes-jr/"
        target="new" ><LinkedinIcon /></a>
        <a href="https://github.com/walternj/DEVFLIX" target="new"><GithubIcon /></a>
        <a href="https://walternj-portifolio.netlify.app/" target="new"><SiteIcon /></a>
      </div>
    </Container>
  );
};

export default Footer;
