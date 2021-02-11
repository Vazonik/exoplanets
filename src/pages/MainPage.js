import React from 'react';
import {
  Typography
} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';

import GreatHeader from '../components/GreatHeader/GreatHeader';
import {
  StarCanvas,
  HeaderContainer,
  ButtonsContainer,
  MediaContainer
} from '../components/StarCanvas/StarCanvas';
import MainPageNavButton from '../components/MainPageNavButton/MainPageNavButton';
import MainPageMediaButton from '../components/MainPageMediaButton/MainPageMediaButton';


function MainPage() { 
  return (
    <>
      <GreatHeader />
      <StarCanvas>
        <HeaderContainer>
          <Typography variant="h5">Strona Główna</Typography>
        </HeaderContainer>
        <ButtonsContainer>
          <MainPageNavButton Icon={AppsIcon} text="Tabela Egzoplanet" link="/chart" />
          <MainPageNavButton Icon={SearchIcon} text="Wyszukiwarka" link="/search" />
          <MainPageNavButton Icon={FavoriteIcon} text="O Projekcie" link="/about-us" />
        </ButtonsContainer>
        <MediaContainer>
          <MainPageMediaButton enumIcon="pk" link="https://www.pk.edu.pl/index.php?lang=pl" />
          <MainPageMediaButton enumIcon="twitter" link="https://twitter.com/runepowered" />
        </MediaContainer>
      </StarCanvas>
    </>
  );
}

export default MainPage;