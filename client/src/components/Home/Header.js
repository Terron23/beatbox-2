import React, { Component } from "react";
import Schedule from "../Schedule";
import Typist from "react-typist";
import Navbar from "./Nav/Nav";
import TopNav from "./Nav/TopNav";
import Hero from "./Hero/Hero";
import NavSearch from "./Nav/NavSearch";

const HeaderArea = ({ children }) => {
  return <header className="header-area">{children}</header>;
};

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  revealSearch = () => {
    if (this.state.active === false) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };

  render() {
    let { locate, history } = this.props;

    return (
      <HeaderArea>
        <NavSearch active={this.state.active} />
        <TopNav />
        <Navbar revealSearch={this.revealSearch} />
        {/* <Hero />
<Schedule locate={locate} history={history}/> */}
      </HeaderArea>
    );
  }
}
