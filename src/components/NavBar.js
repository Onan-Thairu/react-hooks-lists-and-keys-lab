import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkItems = links.map((link) => {
    return <a href={ '#'+link } key={ link } >{ link }</a>
  })

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {linkItems}
    </nav>
  )
}

export default NavBar;
