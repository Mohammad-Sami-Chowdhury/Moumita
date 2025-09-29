import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import "./style.css";

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: false,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleLogout = () => {
    window.location.href = "http://localhost:5173/";
    localStorage.removeItem("isAuthenticated");
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <div className="logo2">
            <h2>
              <Link to="/home">Evan & Moumita</Link>
            </h2>
          </div>
          <ul className="responsivemenu">
            <li>
              <AnchorLink href="#home" onClick={this.menuHandler}>
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#couple" onClick={this.menuHandler}>
                Couple
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#story" onClick={this.menuHandler}>
                Story
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#gallery" onClick={this.menuHandler}>
                Gallery
              </AnchorLink>
            </li>
            <li>
              <button
                className="logout-btn"
                onClick={() => {
                  this.handleLogout();
                  this.menuHandler();
                }}
                style={{
                  width: "80%",
                  padding: "12px 0",
                  background: "#b6e9ff",
                  color: "#111",
                  border: "none",
                  borderRadius: "20px",
                  fontWeight: 600,
                  fontSize: "16px",
                  marginTop: "10px",
                  cursor: "pointer",
                  margin: "20px auto",
                }}
              >
                <i className="fa fa-sign-out"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          {isMenuShow ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true"></i>
          )}
        </div>
      </div>
    );
  }
}
