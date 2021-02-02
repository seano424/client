import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui pointing secondary menu">
      <Link to="/" className="active item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
