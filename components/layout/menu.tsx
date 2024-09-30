"use client";
import React from "react";
import { navConfig } from "@/config/nav-config";
import { Icons } from "@/components/icons/icons";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";

export default function Menu() {
  const [open, setOpen] = React.useState(false);

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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        variant={"outline"}
        size="icon"
        className="xl:hidden"
        onClick={() => setOpen(true)}
      >
        <Icons.menu></Icons.menu>
      </Button>
      <nav className="flex gap-5 text-white">{menuItems}</nav>
      <DialogContent className="bg-bg-zinc-900 [&>button>svg]:stroke-white">
        <DialogHeader className="text-xl font-medium tracking-wide text-white sm:text-center">
          Menu główne
        </DialogHeader>
        <div className="max-w-[400px] mx-auto">
          <nav className="space-y-5 text-center text-white [&_a]:text-xl">
            {menuItems}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
}
