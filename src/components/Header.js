import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';

const Header = () => {

  return (
    <div className="ui secondary menu">
      <Link to="/" className='active item'>
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <div className="item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
