// @/data/navigation.ts

/* ----
The NAVIDATION_ITEMS object has the `href` as the key.
This should make the nextauth middleware (`./middleware.ts`) faster by accessing the item by the req.nextUrl.pathname / key.
*/

import {
  FolderIcon as FolderLucideIcon,
  FolderOpenIcon,
  HomeIcon,
  type LucideProps,
  UserIcon,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

interface NavigationItem {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  activeIcon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  // current: boolean,
  disabled: boolean;
  auth: boolean;
  badge?: string;
}

interface NAVIGATIONITEMS {
  [key: string]: NavigationItem;
}

export const NAVIGATION_ITEMS: NAVIGATIONITEMS = {
  "/": {
    name: "Home",
    icon: HomeIcon,
    //   current: pathname === "/" || pathname === "",
    disabled: false,
    auth: false,
  },
  "/custom": {
    name: "Custom Page",
    //   current: pathname.startsWith("/custom"),
    icon: FolderOpenIcon,
    activeIcon: FolderLucideIcon,
    //   active: pathname.startsWith("/custom"),
    disabled: false,
    auth: false,
  },
  "/userssr": {
    name: "User SSR",
    icon: UserIcon,
    //   active: pathname.startsWith("/userssr"),
    //   current: pathname.startsWith("/userssr"),
    disabled: false,
    auth: true,
    badge: "AUTHENTICATED",
  },
  "/userclient": {
    name: "User Client",
    icon: UserIcon,
    //   current: pathname.startsWith("/userclient"),
    //   active: pathname.startsWith("/userclient"),
    disabled: false,
    auth: true,
    badge: "AUTHENTICATED",
  },
};
