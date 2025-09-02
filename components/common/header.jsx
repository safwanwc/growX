import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./button";

const NAVS = [
  {
    title: "Home",
    path: "/",
    isActive: true,
  },
  {
    title: "About",
    path: "/about",
    isActive: false,
  },
  {
    title: "Services",
    path: "/services",
    isActive: false,
  },
  {
    title: "Contact",
    path: "/contact",
    isActive: false,
  },
];

const Header = () => {
  return (
    <header className="sticky bg-white top-0 left-0 w-full flex justify-between items-center py-4 wrapper">
      <h2>
        <Link href="/">
          <Image src="/images/growx.png" alt="GrowX" width={100} height={100} />
        </Link>
      </h2>
      <nav className="bg-[#CCCCCC1A] py-2 px-4 rounded-[18px]">
        <ul className="flex gap-7">
          {NAVS.map((nav) => (
            <li key={nav.path}>
              <Link
                href={nav.path}
                className={`text-[14px] ${
                  nav.isActive ? "text-[#FE4A0F]" : ""
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="right">
        <Button>Contact</Button>
      </div>
    </header>
  );
};

export default Header;
