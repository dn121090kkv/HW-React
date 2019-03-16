import React, { Component } from 'react';
import logo from '../logo.svg'
import './App.css';
import AsideComponent from "../features/main-content/layout/aside-component"
import MainContentComponent from "../features/main-content/layout/main-content-component";
import FooterComponent from "../features/main-content/layout/footer-component";
import HeaderComponent from "../features/main-content/layout/header-component";


class App extends Component {
  render() {
    return (
        [
    <AsideComponent/>,
    <HeaderComponent />,
    <MainContentComponent />,
    <FooterComponent />,
  ]
    );
  }
}

export default App;
