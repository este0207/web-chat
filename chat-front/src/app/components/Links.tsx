import React from "react";

type Link = {
  label: string;
  href: string;
};

type LinksProps = {
  links: Link[];
};

export default function Links({ links }: LinksProps) {
  return (
    <>
      {links.map((link) => (
        <li className="flex items-center" key={link.href}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </>
  );
}