import React from 'react';
//import ReactDOM from 'react-dom';

export default class HelloExt extends React.Component {
  render() {
    return React.createElement('div', null, `Hello Ext ${this.props.toWhat}`);
  }
}
