import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import HamburgerMenu from './../nav-bar/hamburger-menu.jsx';
import TopNav from './../nav-bar/nav-bar';
import Profile from '../profile/profile';
import NameComponent from './../name/name';
import Experience from './../experience/experience';
import $ from 'jquery'; 
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      navClicked: false,
      currentPage: "Name",
      pages: [
        "Name",
        "Profile",
        "Experience"
      ]
    }
  }

  toggleNav = () => {
    this.setState((prevState) => {
      return { navClicked: !prevState.navClicked }
    })
  }

  setCurrentPage = (currentPage) => {
    this.setState((prevState) => {
      return { 
        ...prevState, 
        currentPage: currentPage
      }
    })
  }

  scrollTo(id) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(`#${id}`).offset().top
    }, 750);
  }        

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopNav 
            clicked={this.state.navClicked} 
            toggleNav={this.toggleNav} 
            currentPage={this.state.currentPage} 
            setCurrentPage={this.setCurrentPage} 
            scrollTo={this.scrollTo} 
            pages={this.state.pages} 
          />
          <HamburgerMenu toggleNav={this.toggleNav} clicked={this.state.navClicked}/>

          <div className="content">
            <NameComponent id="Name"/>
            <Profile id="Profile"/>
            <Experience id="Experience"/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
