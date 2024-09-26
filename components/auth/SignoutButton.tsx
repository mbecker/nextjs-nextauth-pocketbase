"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function SignoutButton() {
  return (
    <button
      type="button"
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      onClick={async (e: React.MouseEvent) => {
        e.preventDefault();
        signOut();
      }}
    >
      Sign out
    </button>
  );
}

export function SigninPageButton() {
  return (
    <Link
      href="/auth/signin"
      prefetch={false}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    >
      Sign in
    </Link>
  );
}
