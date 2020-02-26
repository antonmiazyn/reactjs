import React from 'react';
import Article from './Article';

function Content(props) {
  return props.articlesList.map(item => (
    <Article
      key = {item.id}
      title = {item.title}
      text = {item.text}
    />
    )
  );
}

export default Content;
