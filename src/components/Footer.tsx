import { social } from "@/content/data";
import Link from "next/link";
import React from "react";

type Props = {};

// Footer component displaying social media links.
export default function Footer({}: Props) {
  return (
    <footer className="py-12">
      <ul className="flex items-center justify-center gap-8">
        {/* Map over the social array and create a list item for each social media link */}
        {social.map((item, index) => (
          <li key={index}>
            <Link
              href="https://github.com/Bakhtyar25"
              className="text-indigo-400 transition-colors hover:text-rose-300"
              aria-label={item?.name}
            >
              {item?.icon}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
