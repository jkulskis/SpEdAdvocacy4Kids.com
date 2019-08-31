import React, { Component } from "react"
import { Link } from "gatsby"
// import logo from "../../images/logo.svg"
import { FaUserGraduate } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
      {
        id: 3,
        path: "/services",
        text: "services",
      },
      {
        id: 4,
        path: "/testimonials",
        text: "testimonials",
      },
      {
        id: 5,
        path: "/contact",
        text: "contact",
      },
      {
        id: 6,
        path: "/helpful",
        text: "helpful info",
      },
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collpase navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-light navbar-peach navbar-light">
        <Link to="/" className="navbar-brand">
          <FaUserGraduate alt="logo" />
          {/* attribution text */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
