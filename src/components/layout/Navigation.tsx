"use client";

import { NAV_LINKS } from "@/constants/navLinks";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav>
      <ul className="flex">
        {NAV_LINKS.map((data, index) => (
          <li key={`nav-${data.label}`}>
            <Link href={data.url}>{data.label}</Link>
            {index !== NAV_LINKS.length - 1 && <span className="mx-2">|</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
