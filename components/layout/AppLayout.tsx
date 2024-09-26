import Sidebar from "@/components/Sidebar";


export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-black lg:flex-row">
      <Sidebar />
      <div className="h-dvh flex-1">
        <main className="h-dvh flex-1 ">
          <div className="h-full overflow-y-auto bg-white ring-1 ring-gray-200 dark:border-none dark:bg-gray-900 dark:ring-gray-800 p-4 lg:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}