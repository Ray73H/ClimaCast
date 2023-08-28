"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import SettingsIcon from "./settings";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/icons/logo.png"
          alt="Weather Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">ClimaCast</p>
      </Link>

      {/* Mobile Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/today" className="black_btn">
            Today
          </Link>

          <Link href="/hourly" className="black_btn">
            Hourly
          </Link>

          <Link href="/day" className="black_btn">
            7-Day
          </Link>

          <Link href="/alerts" className="black_btn">
            Alerts
          </Link>

          <SettingsIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
