"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import SettingsIcon from "./settings";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3 px-6">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/icons/logo.png"
          alt="Weather Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="text-lg font-semibold">ClimaCast</p>
      </Link>

      {/* Mobile Navigation */}
      <div className="sm:hidden">{/* ... Mobile navigation links */}</div>

      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <div className="flex gap-3 md:gap-5 items-center">
          <Link
            href="/today"
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            Today
          </Link>

          <Link
            href="/hourly"
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            Hourly
          </Link>

          <Link
            href="/day"
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            7-Day
          </Link>

          <Link
            href="/alerts"
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            Alerts
          </Link>

          <SettingsIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
