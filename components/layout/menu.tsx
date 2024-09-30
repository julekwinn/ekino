import React from "react";
import { navConfig } from "@/config/nav-config";
import { Icons } from "@/components/icons/icons";
import Link from "next/link";

export default function Menu() {
  const menuItems = navConfig.map(({ icon, label, slug }) => {
    const Icon = Icons[icon];
    return (
      <Link
        key={label}
        href={slug}
        className="flex items-center gap-2 hover:text-primary [&:hover>svg]:fill-primary"
      >
        <Icon className="h-5 w-5" />
        <span className="hidden xl:inline">{label}</span>
      </Link>
    );
  });

  return <nav className="flex gap-5 text-white">{menuItems}</nav>;
}
