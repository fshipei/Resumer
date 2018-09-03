import React from 'react';
import { render } from 'react-dom';
import SideBar from './components/sideBar';
import BasicInfo from './components/basicInfo';
import content from './content.json';
import lang from './lang';

require('./index.less');

class Resumer extends React.Component {
  constructor(props) {
    super(props);

    this.content = Object.assign({
      lang: 'zh',
      color: ''
    }, content, props)

    this.render(this.content);

  }

  render(content) {
      
    render(
      <div id="content">
        <SideBar 
          data={content}
          lang={lang[content.lang]}
        />
        <BasicInfo 
          data={content}
          lang={lang[content.lang]}
        />
      </div>,
      document.getElementById('container')
    )
  }
   
}

export default function resumer(content) {
  return new Resumer(content)
}

resumer()

if (process.env.NODE_ENV === 'development') {
  window.Resumer = resumer;
}

window.Resumer_VERSION = process.env.Resumer_VERSION;
