"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";


export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Personlighetstest</span>
      </Link>
      <div className="ml-auto flex items-center gap-4 sm:gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Veksle navigasjonsmeny</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs bg-white p-6 dark:bg-gray-950"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Hovedside
              </Link>
              <Link
                href="/priser"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Priser
              </Link>
              <Link
                href="/guide"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Guide
              </Link>
              <Link
                href="/kontakt"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Kontakt
              </Link>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/logg-inn"
                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Logg inn
              </Link>
              <Link
                href="/registrer"
                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Registrer deg
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            Hovedside
          </Link>
          <Link
            href="/priser"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            Priser
          </Link>
          <Link
            href="/guide"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            Guide
          </Link>
          <Link
            href="/kontakt"
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            prefetch={false}
          >
            Kontakt
          </Link>
          <div className="flex gap-2">
            <Link
              href="/logg-inn"
              className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Logg inn
            </Link>
            <Link
              href="/registrer"
              className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Registrer deg
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

