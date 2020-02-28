import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import ShowMoreButton from './components/Content/ShowMoreButton';
import list from './components/Content/list.js';
import './components/Content/content.css';

//cd /D d:/Reactjs/tutorial/prod3.articles

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesToShow: [],
      articlesHidden: false,
      showButton: 'Show Articles',
      moreButton: false,
      articlesCounter: list.length,
      itterator: 4
    }

    this.handleShowList = this.handleShowList.bind(this);
    this.elementsCounterAdd = this.elementsCounterAdd.bind(this);

    this.shortList = new Array();

    this.elementsCounter = this.state.itterator;

  }


  elementsCounterAdd() {
    this.setState({
      itterator: this.state.itterator += 4
    })
    this.elementsCounter = this.state.itterator;

    if(this.state.articlesCounter > this.elementsCounter) {
      this.setState({
        articlesToShow: this.shortList,
      })
    } else {
      this.setState({
        articlesToShow: list,
      })
    }
    for(let i = 0; i < this.elementsCounter; i++) {
      this.shortList[i] = list[i];
    }
  }

  handleShowList() {
    this.setState({
      articlesHidden: !this.state.articlesHidden,
      moreButton: !this.state.moreButton
    })
    if(!this.state.articlesHidden) {
      if(this.state.articlesCounter > this.elementsCounter) {
        this.setState({
          articlesToShow: this.shortList,
          showButton: 'Hide Articles'
        })
      } else {
        this.setState({
          articlesToShow: list,
          showButton: 'Hide Articles'
        })
      }
    } else {
      this.setState({
        articlesToShow: [],
        showButton: 'Show Articles'
      })
    }
    for(let i = 0; i < this.elementsCounter; i++) {
      this.shortList[i] = list[i];
    }
  }

  render() {

    if(this.state.moreButton) {
      this.moreButtonRender = <ShowMoreButton itteratorUp={this.elementsCounterAdd} />
    } else {
      this.moreButtonRender = ''
    }

    return(
      <div className="container">
        <Header
          showArticles={this.handleShowList}
          showHide={this.state.showButton}
        />
        <div className="content">
          <Content
            articlesList={this.state.articlesToShow}
          />
          {this.moreButtonRender}
        </div>
      </div>
    );
  }
}

export default App;
