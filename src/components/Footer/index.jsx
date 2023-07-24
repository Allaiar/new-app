import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <footer className="footer-info pt-8">
      <div className="flex md:justify-between mt-8 px-16 flex-wrap">
        <div className="flex flex-col gap-y-7">
          <h4 className="text-2xl font-bold">QUALITYLIFE</h4>

          <p className="mt-4 w-96">
            We are dedicated to promoting environmental sustainability. Let us
            join hands and create a greener future!
          </p>
          <div className="flex gap-x-10">
            <div>
              <h6 className="sm:text-xl text-sm font-bold ">EXPLORE</h6>
              <Link to="/">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  Home
                </p>
              </Link>
              <Link to="/about">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  About
                </p>
              </Link>
              <Link to="/animals">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  Projects
                </p>
              </Link>
            </div>
            <div>
              <h6 className="sm:text-xl text-sm font-bold ">GET INVOLVED</h6>
              <Link to="/team">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  Team
                </p>
              </Link>
              <Link to="/donate">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  Donate
                </p>
              </Link>
              <Link to="/privacy">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  Privacy Policy
                </p>
              </Link>
            </div>
            <div>
              <h6 className="sm:text-xl text-sm font-bold ">RESOURCES</h6>
              <Link to="/videos">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  Videos
                </p>
              </Link>
              <Link to="/contact">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  Contact
                </p>
              </Link>
              <Link to="/faqpage">
                <p
                  onClick={handleScrollToTop}
                  className="mt-2 text max-sm:text-sm item"
                >
                  FAQ
                </p>
              </Link>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-x-2">
            <p className="text-xl mt-1 spin-animation2">
              <ion-icon name="locate"></ion-icon>
            </p>
            <p className="">Allayar, Kyrgyzstan</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="mt-4 flex flex-col md:items-center">
            <a href="mailto:qualitylife@gmail.com" className="underline ">
              qualitylife@gmail.com
            </a>
            <p className="mt-2 ">01647470457</p>
            <div className="flex gap-2 mt-3">
              <a
                href="tel:+996990200225"
                className="text-2xl text-green-500 spin-animation"
              >
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>

              <a
                href="https://www.instagram.com/07l20l7/"
                className="text-2xl text-pink-600 spin-animation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>

              <a
                href="https://t.me/allayar6872"
                className="text-2xl text spin-animation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-tiktok"></ion-icon>
              </a>

              <a
                href="https://www.linkedin.com/"
                className="text-2xl text-blue-500 spin-animation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 footer text-center py-4">
        © 2023 QUALITYLIFE. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
