import React from "react";
import Search from "./Search";

function Header({searchSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchSubmit={searchSubmit}/>
    </header>
  );
}

export default Header;
