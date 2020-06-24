import React from "react";

import { COMPANY_NAME } from "../common/constants.js";

function Header() {
  return (
    <header className="navbar navbar-light bg-white d-flex align-items-center shadow-sm">
      <div className="container-lg">
        <div className="d-flex justify-content-center align-items-center">
          <a className="text-decoration-none font-weight-bold h2" href="/">
            {COMPANY_NAME}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
