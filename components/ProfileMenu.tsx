import Image from "next/image";
import Link from "next/link";

import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

import UserRound from "@/components/icons/UserRound";
import ChevronUp from "@/components/icons/ChevronUp";

type ProfileMenuProps = {
  className?: string;
  size: "large" | "small";
};

const ProfileMenu = ({ size }: ProfileMenuProps) => {
  const { data: session, status } = useSession();

  const isSize = size === "large";
  return (
    <div className="flex items-center justify-between space-x-2">
      {status === "loading" ? (
        <div className="flex w-full items-center gap-x-3 rounded-md p-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          {isSize && <Skeleton className="h-7 w-[90%]" />}
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-full">
            <div className="group flex w-full items-center rounded-full text-sm font-semibold leading-6 text-foreground hover:bg-gray-200 hover:dark:bg-secondary lg:gap-x-3 lg:rounded-md lg:p-2">
              {session?.pocketbase?.meta?.avatarUrl ? (
                <Image
                  className="h-7 w-7 rounded-full bg-secondary"
                  src={session?.pocketbase?.meta?.avatarUrl}
                  width={30}
                  height={30}
                  alt={`Profile picture of ${session?.email}`}
                  loading="lazy"
                />
              ) : (
                <UserRound className="h-7 w-7 rounded-full bg-secondary p-1 ring-1 ring-muted-foreground/50" />
              )}
              {isSize && (
                <span className="flex w-full items-center justify-between">
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true" className="line-clamp-2">
                    {session?.email}
                  </span>
                  <ChevronUp
                    className="ml-2 h-5 w-5 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                </span>
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2 px-0 pb-2 lg:mr-0 lg:w-[240px] xl:w-[270px]">
            {session ? (
              <>
                <DropdownMenuLabel className="mt-2 truncate !py-[3px] px-3 text-sm text-muted-foreground">
                  {session?.user?.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="!my-2" />

                <Link
                  onClick={() =>
                    signOut({
                      callbackUrl: `${window.location.origin}`,
                    })
                  }
                  className="flex items-center px-3 py-2 text-sm duration-200 hover:bg-gray-200 dark:hover:bg-muted"
                  href={""}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Link>
              </>
            ) : null}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default ProfileMenu;
