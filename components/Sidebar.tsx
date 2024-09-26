"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { ScrollArea } from "@/components/ui/scroll-area";

import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { SignoutButton, SigninPageButton } from "./auth/SignoutButton";
import { NAVIGATION_ITEMS } from "@/data/navigation";

export default function Sidebar() {
  return (
    <>
      <nav>
        {/* sidebar for desktop */}
        <SidebarComponent className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex" />

        {/* move main screen to the right by width of the sidebar on desktop */}
        <div className="lg:pl-72" />
        {/* sidebar for mobile */}
        <div className="sticky top-0 z-40 mb-1 flex h-14 shrink-0 items-center border-b border-gray-50/90 bg-gray-50 px-6 dark:border-none dark:border-black/10 dark:bg-black/95 sm:px-12 lg:hidden">
          <MobileSidebarComponent />
        </div>
      </nav>
    </>
  );
}

export const SidebarComponent = ({ className }: { className?: string }) => {
  const { data: session } = useSession();

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <aside
        className={cn(
          "h-dvh w-full flex-shrink-0 flex-col justify-between gap-y-6 bg-gray-50 px-4 pt-4 dark:bg-black lg:w-72 lg:px-6 lg:pt-6",
          className
        )}
      >
        {/* Sidebar component, swap this element with another sidebar if you like */}

        <div className="flex  shrink-0 items-center">
          <p className="flex items-center text-2xl font-bold tracking-tighter text-black dark:text-white">
            pocketbase
          </p>
        </div>

        <ScrollArea className="flex-grow">
          <section className="flex flex-1 flex-col gap-y-6">
            <div className="space-y-2 ">
              {Object.entries(NAVIGATION_ITEMS).map(([key, item]) => {
                const isCurrent =
                  key === "/"
                    ? pathname === "/" || pathname === ""
                    : pathname.startsWith(key);
                return (
                  <button
                    type="button"
                    key={item.name}
                    onClick={() => router.push(key)}
                    disabled={item.auth ? !session : item.disabled}
                    className={cn(
                      isCurrent
                        ? "bg-gray-200 font-semibold text-foreground dark:bg-secondary"
                        : "duration-200 hover:bg-gray-200 hover:dark:bg-muted",
                      "relative group flex w-full items-center gap-x-2 rounded-md px-3 py-2 text-sm leading-6 disabled:cursor-default disabled:text-muted-foreground disabled:hover:bg-transparent"
                    )}
                  >
                    <item.icon
                      className="h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                    {item.badge && (
                      <span className="absolute right-1 inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-500/10">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </section>
        </ScrollArea>
        <div className="mb-6 flex flex-col space-y-2 items-center justify-center">
          {session && (
            <>
              <span>{session.email}</span>
              <SignoutButton />
            </>
          )}
          {!session && <SigninPageButton />}
        </div>
      </aside>
    </div>
  );
};

export const MobileSidebarComponent = ({
  className,
}: {
  className?: string;
}) => {
  const { data: session } = useSession();

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-row space-x-2 w-full", className)}>
      {Object.entries(NAVIGATION_ITEMS).map(([key, item]) => {
        const isCurrent =
          key === "/"
            ? pathname === "/" || pathname === ""
            : pathname.startsWith(key);
        return (
          <button
            type="button"
            key={item.name}
            onClick={() => router.push(key)}
            disabled={item.auth ? !session : item.disabled}
            className={cn(
              isCurrent
                ? "bg-gray-200 font-semibold text-foreground dark:bg-secondary"
                : "duration-200 hover:bg-gray-200 hover:dark:bg-muted",
              "relative group flex flex-col w-full items-center justify-center gap-x-2 rounded-md px-3 py-2 text-sm leading-6 disabled:cursor-default disabled:text-muted-foreground disabled:hover:bg-transparent"
            )}
          >
            <span>{item.name}</span>
            {item.badge && <span className="text-xs">{item.badge}</span>}
          </button>
        );
      })}
      <div className="mb-6 flex flex-col space-y-2 items-center justify-center">
        {session && (
          <>
            <span>{session.email}</span>
            <SignoutButton />
          </>
        )}
        {!session && <SigninPageButton />}
      </div>
    </div>
  );
};
