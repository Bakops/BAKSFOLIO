"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-30 w-full flex flex-col items-center px-2 sm:px-4 md:px-8 pt-5">
      <header
        className={`flex flex-row justify-between items-center p-3 sm:p-4 transition-colors duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
            : "bg-[#181818] bg-opacity-80 text-white"
        } backdrop-blur-xl rounded-[20px] w-full max-w-[1200px] h-height_header gap-2`}
      >
        <div className="flex justify-center items-center ml-2 sm:ml-4 text-xl font-bold w-[8rem] sm:w-[12rem] h-[70px] sm:h-[95px]">
          <Link href="/">
            <img
              src="logo-portfolio-bakou.PNG"
              alt="Logo"
              className="w-auto h-auto scale-115 object-contain"
            />
          </Link>
        </div>

        <nav className="hidden xl:flex flex-row gap-4 sm:gap-8">
          <ul className="flex flex-row gap-4 sm:gap-8">
            <li>
              <Link
                href="/"
                className={`menu-link font-Poppins font-bold text-[14px] ${
                  scrolled ? "scrolled-hover" : ""
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/service"
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

        <div className="hidden xl:flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://cal.com/bakou-toure/30min"
            title="Prendre un rendez-vous"
            className="inline-flex gap-2 items-center justify-center py-1.5 px-4 text-sm font-medium bg-white rounded-md transition-all duration-200 border-b-2 border-transparent  bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text"
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

        <button
          className="flex flex-col justify-center items-center gap-1 xl:hidden mr-[10px]"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-[#000] backdrop-blur-xl text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 z-10 xl:hidden`}
      >
        <div className="p-6">
          <div className="flex w-full justify-end mb-6">
            <button
              className="mt-4 text-white"
              onClick={toggleMenu}
              aria-label="Fermer le menu"
            >
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

          <ul className="flex flex-col justify-end gap-5 ml-3">
            <li>
              <Link
                href="/"
                className="menu-link text-2xl font-poppins font-bold menu-link-active"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="menu-link text-2xl font-poppins font-bold"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/realisations"
                className="menu-link text-2xl font-poppins font-bold"
                onClick={toggleMenu}
              >
                Réalisations
                <span className="text-[#FA9F18] text-[16px] font-bold">.</span>
              </Link>
            </li>
            <li>
              <Link
                href="/propos"
                className="menu-link text-2xl font-poppins font-bold"
                onClick={toggleMenu}
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="menu-link text-2xl font-poppins font-bold"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex justify-center mt-10">
            <Link
              href="https://cal.com/bakou-toure/30min"
              title="Prendre un rendez-vous"
              className="inline-flex gap-2 items-center justify-center py-2 px-6 text-lg font-medium text-[#FFF] bg-[#FA9F18] rounded-full transition-all duration-200 hover:bg-[#c3cc50]"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Contactez moi
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center mt-16">
            {/* Socials ... */}
          </div>
          <div className="text-center text-sm text-white hover:underline mt-8">
            <a href="">
              <p>© Baks.Dev 2025 · Tous droits réservés </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
