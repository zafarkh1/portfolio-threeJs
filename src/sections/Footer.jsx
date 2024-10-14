import React from "react";

function Footer(props) {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex md:flex-row flex-col justify-between items-center gap-5">
      <div className="flex gap-3">
        <div className="social-icon">
          <img
            src="/assets/github.svg"
            alt="github"
            className="h-1/2 w-1/2 cursor-pointer"
          />
        </div>
        <div className="social-icon">
          <img
            src="/assets/twitter.svg"
            alt="github"
            className="h-1/2 w-1/2 cursor-pointer"
          />
        </div>
        <div className="social-icon">
          <img
            src="/assets/instagram.svg"
            alt="github"
            className="h-1/2 w-1/2 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex gap-2 text-white-500">
        <p>© 2024 Zafar</p>
        <p>|</p>
        <p>All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;
