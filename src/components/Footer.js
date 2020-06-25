import React from "react";

import { COMPANY_NAME } from "../common/constants.js";

function Footer() {
  return (
    <div>
      <div className="container pt-5 pb-5">
        <div className="d-flex flex-row">
          <div className="flex-fill">
            <a className="text-decoration-none font-weight-bold h2" href="/">
              {COMPANY_NAME}
            </a>
          </div>
          <div className="flex-fill">
            <h6 className="p-1">COMPANY</h6>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              About
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Blog
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Careers
            </a>
          </div>
          <div className="flex-fill">
            <h6 className="p-1">FOLLOW</h6>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Facebook
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Instagram
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              Twitter
            </a>
            <a
              className="d-block text-decoration-none text-secondary p-1"
              href="/"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <small>
          <span>
            © {new Date().getFullYear()} {COMPANY_NAME}, Inc.
          </span>
          <a href="/" className="text-secondary mx-1">
            Terms
          </a>{" "}
          <a href="/" className="text-secondary mx-1">
            Privacy
          </a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
