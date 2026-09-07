import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant mt-auto">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-outline-variant">
          {/* Col 1: Bio & Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="h-6 w-auto object-contain" size={32} />
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                [YOUR NAME]
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Technical Consultant bridging Computer Science architectures and Advanced Data Analytics. Delivering measurable engineering and algorithmic performance for scalable enterprise ecosystems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                className="px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface font-label-code text-label-code text-xs hover:bg-surface-container-low transition-colors flex items-center gap-1.5"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>LinkedIn [YOUR LINKEDIN]</span>
              </a>
              <a
                className="px-3 py-1.5 rounded-lg border border-outline-variant text-on-surface font-label-code text-label-code text-xs hover:bg-surface-container-low transition-colors flex items-center gap-1.5"
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider block font-semibold text-xs">
              Architecture &amp; Navigation
            </span>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/my-profile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/my-background">
                  My Background
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/previous-work">
                  Previous Work
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/contact-me">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider block font-semibold text-xs">
              Direct Inquiries
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Available for technical consulting advisory, enterprise data pipelines, and architecture reviews.
            </p>
            <a
              className="inline-block font-label-code text-label-code text-primary font-semibold hover:underline"
              href="mailto:consultant@example.com"
            >
              Email [YOUR EMAIL]
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-on-surface-variant font-body-sm text-body-sm text-xs">
          <div>
            &copy; {currentYear} [YOUR NAME]. All rights reserved. Professional Portfolio.
          </div>
          <div className="flex items-center gap-3 font-label-caps text-label-caps uppercase tracking-wider text-[11px]">
            <span>High Availability</span>
            <span>&bull;</span>
            <span>Analytical Rigor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
