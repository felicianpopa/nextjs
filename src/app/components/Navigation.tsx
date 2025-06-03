"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const links = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "/products",
      text: "Products",
    },
  ];
  const pathName = usePathname();
  return (
    <ul className="flex space-x-4 text-blue-400">
      {links.map((link) => {
        const isActive = pathName.startsWith(link.url);
        return (
          <li key={link.url}>
            <Link
              href={link.url}
              className={isActive ? "font-bold text-blue-600" : ""}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
