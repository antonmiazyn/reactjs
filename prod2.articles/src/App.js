import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import list from './components/Content/list.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowList = this.handleShowList.bind(this);

    this.state = {
      articlesToShow: []
    }
  }

  handleShowList() {
    this.setState({
      articlesToShow: list
    })
  }

  render() {
    return(
      <div className="container">
        <Header showArticles={this.handleShowList}/>
        <div className="content">
          <Content articlesList={this.state.articlesToShow}/>
        </div>
      </div>
    );
  }
}

export default App;
