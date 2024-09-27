import Sidebar from "@/components/Sidebar";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-gray-50 dark:bg-black lg:flex-row">
      <Sidebar />
      <div className="h-mobile-dvh lg:h-dvh flex-1 flex flex-col space-y-2 bg-white ring-1 ring-gray-200 dark:border-none dark:bg-gray-900 dark:ring-gray-800">
        <main className="flex-1">
          {children}
        </main>
        <footer className="w-full flex items-center justify-end p-4 lg:p-6">
          <Link target="_blank" href="https://github.com/mbecker/nextjs-nextauth-pocketbase">
            <GitHubLogoIcon className="w-8 h-8"/>
          </Link>
        </footer>
      </div>
    </div>
  );
}
