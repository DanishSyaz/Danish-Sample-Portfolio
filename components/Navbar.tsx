"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "My Profile", href: "/my-profile" },
  { name: "My Background", href: "/my-background" },
  { name: "Previous Work", href: "/previous-work" },
  { name: "Contact Me", href: "/contact-me" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand & Identity */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <BrandLogo className="h-8 w-auto object-contain transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface leading-tight font-bold tracking-tight">
              [YOUR NAME]
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[10px] sm:text-xs">
              Technical Consultant
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-lg font-label-bold text-label-bold transition-colors ${
                  active
                    ? "bg-surface-container text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Availability Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wide text-[11px] font-semibold">
              Open to Opportunities
            </span>
          </div>

          {/* Direct CTA */}
          <Link
            href="/contact-me"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-on-primary font-label-bold text-label-bold hover:bg-on-primary-fixed-variant transition-colors shadow-sm text-sm"
          >
            Get in Touch
          </Link>

          {/* Profile Icon Avatar */}
          <Link
            href="/my-profile"
            aria-label="View Profile"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-outline-variant bg-surface-container-lowest/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="sm:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant mb-2">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wide text-[11px] font-semibold">
              Open to Opportunities
            </span>
          </div>

          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  active
                    ? "bg-surface-container text-primary"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href="/contact-me"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-semibold text-sm hover:bg-on-primary-fixed-variant transition-colors shadow-sm"
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
