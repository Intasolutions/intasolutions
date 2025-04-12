"use client";

import React, { useEffect, useState } from "react";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50  transition-transform duration-300 ease-in-out",
        showNavbar ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    

<Link href="/">
  <Image
    src="/img/in-ta.png"
    alt="Company Logo"
    width={120} // adjust based on actual image size
    height={32} // adjust as needed
    className="h-8 w-auto"
    priority // optional: preload for better LCP
    unoptimized
  />
</Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <Menu setActive={setActive}>
            <Link href="/about" className="text-m">About</Link>

            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web">Web Development</HoveredLink>
                <HoveredLink href="/mobile">Mobile App</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/ui">UI/UX</HoveredLink>
                <HoveredLink href="/digitalmarketing">Digital Marketing</HoveredLink>
                <HoveredLink href="/cloud">Cloud Services</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-1 gap-4 p-4">
                <ProductItem
                  title="Asset Management System"
                  href="/"
                  src="/img/asset.png"
                  description="Prepare for Managing your Asset with Digital Record"
                />
              </div>
            </MenuItem>

            <Link href="/contact">Contact</Link>
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
  {/* Mobile Sidebar Menu */}
<div
  className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="p-6 space-y-6 bg-black">
    {/* Close Button */}


    <Link
      href="/about"
      className="block text-base font-medium text-black dark:text-white"
      onClick={() => setMenuOpen(false)}
    >
      About
    </Link>

    <div>
      <p className="text-base font-semibold text-black dark:text-white mb-2">Services</p>
      <div className="flex flex-col space-y-2 ml-3 text-sm">
        <HoveredLink href="/web">Web Development</HoveredLink>
        <HoveredLink href="/mobile">Mobile App</HoveredLink>
        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
        <HoveredLink href="/ui">UI/UX</HoveredLink>
        <HoveredLink href="/digitalmarketing">Digital Marketing</HoveredLink>
        <HoveredLink href="/cloud">Cloud Services</HoveredLink>
      </div>
    </div>

    <div>
      <p className="text-base font-semibold text-black dark:text-white mb-2">Products</p>
      <div className="ml-3">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex space-x-3 items-start"
        >
          <Image
  src="/img/asset.png"
  alt="Asset"
  width={64}  // You can specify the width
  height={48} // You can specify the height
  className="object-cover rounded-md shadow-md"
/>
          <div className="text-sm">
            <h4 className="text-black dark:text-white font-semibold">Asset Management</h4>
            <p className="text-neutral-600 dark:text-neutral-300 text-xs">
              Manage your assets digitally
            </p>
          </div>
        </Link>
      </div>
    </div>

    <Link
      href="/contact"
      className="block text-base font-medium text-black dark:text-white"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </Link>
  </div>
</div>

    </div>
  );
};

export default Navbar;
