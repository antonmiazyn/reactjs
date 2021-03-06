import React from 'react';
import Logotype from './Logotype';
import './header.css';

function Header(props) {
  let siteName = ['Articles', '.REACT'];

  return(
    <header>
      <Logotype />
      <div className="header__linker">
        <a onClick={props.showArticles}>Show Articles</a>
      </div>
    </header>
  );
}

export default Header;
