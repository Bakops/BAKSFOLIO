"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-30 w-full flex flex-col items-center mt-[20px] ml-[20px] mr-[20px]">
      <header
        className={`flex flex-row justify-between items-center p-4 transition-colors duration-300 ${
          scrolled ? "bg-[#FA9F18] bg-opacity-90" : "bg-[#f4f4f4] bg-opacity-20"
        } backdrop-blur-xl text-white rounded-[20px] w-full h-height_header md:w-[71.6%] gap-2`}
      >
        {/* Logo at the beginning */}
        <div className="flex justify-center items-center ml-[15px] text-xl font-bold w-[12rem] h-[95px]">
          <Link href="/">
            <img
              src="logo.png"
              alt="Logo"
              className="w-auto h-auto scale-125 object-contain"
            />
          </Link>
        </div>

        {/* Menu links in the middle */}
        <nav className={`hidden md:flex flex-row gap-8`}>
          <ul className="flex flex-row gap-8">
            <li>
              <Link
                href="/"
                className="menu-link font-Poppins font-bold text-[14px]"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/crawlSite"
                className="menu-link font-poppins font-bold text-[14px]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/realisations"
                className="menu-link font-poppins font-bold text-[14px]"
              >
                Réalisations
                <span className="text-[#FA9F18] text-[16px] font-bold">.</span>
              </Link>
            </li>
            <li>
              <Link
                href="/propos"
                className="menu-link font-poppins font-bold text-[14px]"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="menu-link font-poppins font-bold text-[14px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://cal.com/bakou-toure/30min"
            title="Prendre un rendez-vous"
            className="inline-flex gap-2 items-center justify-center py-1.5 px-4 text-sm font-medium text-[#FFF] bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl rounded-md transition-all duration-200 border-b-2 border-transparent hover:bg-[#c3cc50] hover:text-[#FFF] hover:bg-opacity-20 hover:backdrop-blur-xl"
          >
            Contactez moi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="flex flex-col justify-center items-center gap-1 md:hidden"
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </header>

      {/* Full-screen menu with slide animation */}
      <div
        className={`fixed inset-0 bg-[#f4f4f4] bg-opacity-20 backdrop-blur-xl text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 z-10 md:hidden`}
      >
        <div className="p-6">
          <div className="flex w-full justify-end mb-6">
            <button className="mt-4 text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col justify-end gap-10 ml-5">
            <li>
              <Link
                href="/chatAI"
                className="menu-link text-4xl font-poppins font-bold menu-link-active"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/test/page/cours"
                className="menu-link text-4xl font-poppins font-bold"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/test/page/lessons"
                className="menu-link text-4xl font-poppins font-bold"
              >
                Crédit
              </Link>
            </li>
            <li>
              <Link
                href="/test/page/a_propos"
                className="menu-link text-4xl font-poppins font-bold"
              >
                Réalisations
                <span className="text-[#FA9F18] text-[16px] font-bold">.</span>
              </Link>
            </li>
            <li>
              <Link
                href="/test/page/contact"
                className="menu-link text-4xl font-poppins font-bold"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="menu-link text-4xl font-poppins font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* Social media icons at the end, hidden on mobile */}
          <div className="flex flex-row flex-wrap items-center justify-center mt-64">
            <a
              href=""
              className="flex items-center justify-center w-10 h-10 text-gray-300 transition duration-250 hover:text-[#c3cc50] hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              <span className="sr-only">TWITTER</span>
            </a>

            <a
              href=""
              rel="author"
              className="flex items-center justify-center w-10 h-10 text-gray-300 transition duration-250 hover:text-[#c3cc50] hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <span className="sr-only">GOOGLE +</span>
            </a>

            <a
              href=""
              rel="author"
              className="flex items-center justify-center w-10 h-10 text-gray-300 transition duration-250 hover:text-[#c3cc50] hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              <span className="sr-only">FACEBOOK</span>
            </a>
          </div>
          <div className="text-center text-sm text-gray-600 hover:underline">
            <a href="">
              <p>© Bakops 2024 · Tous droits réservés </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
