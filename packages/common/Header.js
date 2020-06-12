import React from "react";

function Header({ level = "1", title }) {
  return React.createElement(`h${level}`, {}, `${title}-perduk`);
}

export default Header;