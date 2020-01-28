import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div style={style.content}>
        <p>123123123132</p>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <div style={style.Header}>
        <h1>Header</h1>
      </div>
    )
  }
}


const style = {
  Header:{backgroundColor:'#ff00ff', height:100},
  content:{backgroundColor:'#0000ff',color:'#fff'}
}