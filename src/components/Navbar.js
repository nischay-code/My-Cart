import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h2>Apna Cart</h2>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
