//import React from 'react';
//import ReactDOM from 'react-dom';
//import HelloExt from './helloWorldExt.jsx';<HelloExt toWhat="World" />
//import HelloExt from './comp/my-navbar.jsx';

export default class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat} </div>;
  }
}

